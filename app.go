package main

import (
	"context"
	"io"
	"net/http"
	"os"
	"os/exec"
)

type MusicApp struct {
	ctx    context.Context
	window *Window
}

// Экспортируемый конструктор
func NewApp() *MusicApp {
	return &MusicApp{
		window: &Window{},
	}
}

func (a *MusicApp) Startup(ctx context.Context) {
	os.MkdirAll("tmp", 0755)
	a.ctx = ctx
	a.window.ctx = ctx
}

func (a *MusicApp) GetAudioBytes(path string) ([]byte, error) {
	return os.ReadFile(path)
}

func (a *MusicApp) DownloadFile(url, path string) error {
	resp, err := http.Get(url)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	out, err := os.Create(path)
	if err != nil {
		return err
	}
	defer out.Close()

	_, err = io.Copy(out, resp.Body)
	return err
}

func (a *MusicApp) DecryptCENC(input, output, key string) error {
	cmd := exec.Command("mp4decrypt", "--key", "1:"+key, input, output)
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	return cmd.Run()
}

func (a *MusicApp) ExtractAudio(input, output, codec string) error {
	cmd := exec.Command("ffmpeg", "-y", "-i", input, "-map", "0:a:0", "-c:a", codec, output)
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	return cmd.Run()
}

func (a *MusicApp) FullPipeline(url, key, codec string) ([]byte, error) {
	tmpInput := "tmp/encrypted.mp4"
	decrypted := "tmp/decrypted.mp4"
	audio := "tmp/output." + codec

	// 1. download
	if err := a.DownloadFile(url, tmpInput); err != nil {
		return nil, err
	}

	// 2. decrypt
	if err := a.DecryptCENC(tmpInput, decrypted, key); err != nil {
		return nil, err
	}

	// 3. extract audio
	if err := a.ExtractAudio(decrypted, audio, codec); err != nil {
		return nil, err
	}

	// 4. read file into memory
	return os.ReadFile(audio)
}
