package main

import (
	"context"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

type MusicApp struct {
	ctx context.Context
}

func NewApp() *MusicApp {
	return &MusicApp{}
}

func (a *MusicApp) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *MusicApp) Minimize(ctx context.Context) {
	runtime.WindowMinimise(ctx)
}

func (a *MusicApp) Maximize(ctx context.Context) {
	runtime.WindowMaximise(ctx)
}

func (a *MusicApp) Restore(ctx context.Context) {
	runtime.WindowUnmaximise(ctx)
}

func (a *MusicApp) Close(ctx context.Context) {
	runtime.Quit(ctx)
}
