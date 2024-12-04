export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "trabalho-adm/_app",
	assets: new Set(["favicon.png","fonts/Poppins-Bold.ttf","fonts/Poppins-ExtraBold.ttf","fonts/Poppins-Medium.ttf","fonts/Poppins-Regular.ttf","fonts/Poppins-SemiBold.ttf","images/client-icon.svg"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.COpXh2mc.js","app":"_app/immutable/entry/app.Br3ckd8w.js","imports":["_app/immutable/entry/start.COpXh2mc.js","_app/immutable/chunks/entry.r64Ss0JG.js","_app/immutable/chunks/runtime.CuGXy-Xm.js","_app/immutable/entry/app.Br3ckd8w.js","_app/immutable/chunks/runtime.CuGXy-Xm.js","_app/immutable/chunks/store.hrq2tXfF.js","_app/immutable/chunks/disclose-version.BlAstWID.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
