'use client'

import { useState, type FormEvent } from 'react'
import { Check, X } from 'lucide-react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  function reset() {
    setSubmitted(false)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="font-mono text-xs uppercase tracking-[0.2em] text-primary/70"
          >
            Név
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
            placeholder="Hogyan szólíthatunk?"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="font-mono text-xs uppercase tracking-[0.2em] text-primary/70"
          >
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
            placeholder="nev@pelda.hu"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="font-mono text-xs uppercase tracking-[0.2em] text-primary/70"
          >
            Üzenet
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="resize-none border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-primary"
            placeholder="Mesélj, mi érdekel a mélység világából..."
          />
        </div>
        <button
          type="submit"
          className="group mt-2 inline-flex w-fit items-center gap-3 bg-primary px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Üzenet küldése
        </button>
      </form>

      {submitted && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center p-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
        >
          <button
            type="button"
            aria-label="Bezárás"
            onClick={reset}
            className="absolute inset-0 bg-abyss/80 backdrop-blur-sm"
          />
          <div className="relative w-full max-w-md border border-primary/30 bg-surface p-8 md:p-10">
            <button
              type="button"
              onClick={reset}
              aria-label="Bezárás"
              className="absolute right-5 top-5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="size-5" />
            </button>
            <div className="flex size-14 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
              <Check className="size-7 text-primary" />
            </div>
            <h3
              id="success-title"
              className="mt-6 font-heading text-2xl font-light text-foreground"
            >
              Köszönjük az üzenetet
            </h3>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Üzeneted megérkezett a felszínre. Hamarosan válaszolunk — addig is
              merülj el bátran a magazin írásaiban.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-8 inline-flex w-fit items-center gap-3 border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Vissza
            </button>
          </div>
        </div>
      )}
    </>
  )
}
