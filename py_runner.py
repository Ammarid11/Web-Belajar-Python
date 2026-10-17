# Menjalankan satu jawaban seperti worker Pyodide di app.js (setup Python diambil dari app.js).
import sys, json, io, asyncio, contextlib

req = json.load(sys.stdin)
G = {"__name__": "__setup__"}
exec(compile(req["setup"], "<setup>", "exec"), G)
G["_stdin_lines"][:] = [str(x) for x in req.get("stdin") or []]
code, check = req["code"], req.get("check")
out = {"status": "ok", "message": "", "errType": "", "info": None, "stdout": ""}

syn = G["_syntax_check"](code)
if syn:
    out.update(status="syntax", message=str(syn))
else:
    buf, p = io.StringIO(), {"__name__": "__main__"}
    try:
        with contextlib.redirect_stdout(buf), contextlib.redirect_stderr(io.StringIO()):
            asyncio.run(G["_run_user"](code, p))
    except SystemExit:
        pass
    except BaseException as e:
        out.update(status="error", errType=type(e).__name__, message=f"{type(e).__name__}: {e}")
    out["stdout"] = buf.getvalue()
    if out["status"] == "ok":
        try:
            out["info"] = G["_info"](code)
        except Exception:
            out["info"] = None
        if check:
            try:
                exec(check, p)
            except BaseException as e:
                out.update(status="checkfail", message=f"{type(e).__name__}: {e}".strip().split("\n")[-1])
print(json.dumps(out))
