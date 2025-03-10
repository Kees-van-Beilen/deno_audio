// Auto-generated with deno_bindgen
// import { CachePolicy, prepare } from "https://deno.land/x/plug@1.0.2/plug.ts"
import { dlopen, FetchOptions } from "https://deno.land/x/plug@1.0.2/mod.ts";
function encode(v: string | Uint8Array): Uint8Array {
  if (typeof v !== "string") return v
  return new TextEncoder().encode(v)
}
function decode(v: Uint8Array): string {
  return new TextDecoder().decode(v)
}
function readPointer(v: any): Uint8Array {
  const ptr = new Deno.UnsafePointerView(v as Deno.UnsafePointer)
  const lengthBe = new Uint8Array(4)
  const view = new DataView(lengthBe.buffer)
  ptr.copyInto(lengthBe, 0)
  const buf = new Uint8Array(view.getUint32(0))
  ptr.copyInto(buf, 4)
  return buf
}
const opts = {
  name: "deno_audio",
  url:
    (new URL(
      "https://github.com/Kees-van-Beilen/deno_audio/releases/download/0.2.1",
      import.meta.url,
    )).toString(),
  suffixes: {
    darwin: {
      aarch64: ".aarch64",
      x86_64: ".x86_64",
    },
  },
  policy: undefined,
}
const _lib = await dlopen(opts, {
  play: { parameters: ["pointer", "usize"], result: "void", nonblocking: true },
})

export function play(a0: string) {
  const a0_buf = Deno.UnsafePointer.of(encode(a0))
  let rawResult = _lib.symbols.play(a0_buf, a0_buf.byteLength)
  const result = rawResult
  return result
}
