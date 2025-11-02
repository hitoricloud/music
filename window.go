package main

import (
	"context"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

type Window struct {
	ctx context.Context
}

func (w *Window) Minimize(ctx context.Context) {
	runtime.WindowMinimise(ctx)
}

func (w *Window) Maximize(ctx context.Context) {
	runtime.WindowMaximise(ctx)
}

func (w *Window) Restore(ctx context.Context) {
	runtime.WindowUnmaximise(ctx)
}

func (w *Window) Close(ctx context.Context) {
	runtime.Quit(ctx)
}
