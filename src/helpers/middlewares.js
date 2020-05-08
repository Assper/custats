export async function errorHandler(ctx, next) {
  try {
    await next()
  } catch (err) {
    ctx.app.emit('error', err, ctx)
  }
}
