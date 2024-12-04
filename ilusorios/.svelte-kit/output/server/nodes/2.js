

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DMdPFr4v.js","_app/immutable/chunks/disclose-version.BlAstWID.js","_app/immutable/chunks/runtime.CuGXy-Xm.js","_app/immutable/chunks/legacy.Dwwq-fqy.js"];
export const stylesheets = [];
export const fonts = [];
