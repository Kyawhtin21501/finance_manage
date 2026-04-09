import { createTodoAction } from "./actions";

export default function TodoPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
      <div className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-2xl font-semibold text-slate-900">Create Todo</h1>
        <p className="mt-1 text-sm text-slate-500">
          Add a task using a layered Server Action flow.
        </p>

        <form action={createTodoAction} className="mt-6 space-y-4">
          <div className="space-y-2">
            <label htmlFor="content" className="text-sm font-medium text-slate-700">
              Task
            </label>
            <textarea
              id="content"
              name="content"
              rows={6}
              required
              placeholder="Write your todo task..."
              className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
            />
          </div>

          <div className="flex items-center justify-end gap-3">
            <button
              type="reset"
              className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
