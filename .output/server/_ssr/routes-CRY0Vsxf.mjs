import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as Lightbulb, c as Compass, d as Brain, f as BookOpen, i as PenLine, l as ChevronRight, n as Target, o as Layers, p as ArrowRight, r as Sparkles, s as FileText, t as X, u as Check } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CRY0Vsxf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WAITLIST_FORM_URL = "https://forms.gle/zBMqzP7ozLRUoHj89";
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground font-sans antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Problem, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Solution, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comparison, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Waitlist, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Navbar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[15px] font-semibold tracking-tight",
						children: "kodean"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 md:flex",
					children: [
						{
							label: "Vision",
							href: "#vision"
						},
						{
							label: "How it Works",
							href: "#solution"
						},
						{
							label: "Features",
							href: "#features"
						},
						{
							label: "Message",
							href: "#message"
						}
					].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: WAITLIST_FORM_URL,
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-2",
					children: ["Join Waitlist", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
				})
			]
		})
	});
}
function LogoMark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid h-7 w-7 place-items-center rounded-lg",
		style: {
			background: "var(--gradient-brand)",
			boxShadow: "var(--shadow-glow)"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[13px] font-bold text-white",
			children: "K"
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 -z-10",
				style: { background: "var(--gradient-hero)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 -z-10 bg-grid"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pt-12 pb-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pt-16 lg:pb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-accent" }), "AI builds fast. Clarity builds to last."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 font-display text-[40px] font-semibold leading-[1.02] tracking-tight sm:text-[52px] lg:text-[62px]",
						children: [
							"Stop shipping ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: "AI-generated code"
							}),
							" you",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"can't explain.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 max-w-xl text-[17px] leading-relaxed text-muted-foreground",
						children: [
							"Every developer has copied code they didn't fully understand. It works for now, but when it's time to modify, debug, or explain it, confidence turns into guesswork. ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "kodean" }) }),
							" is your AI learning companion, helping you truly understand your code so every project leaves you a more confident engineer."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: WAITLIST_FORM_URL,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]",
							style: {
								background: "var(--gradient-brand)",
								boxShadow: "var(--shadow-glow)"
							},
							children: ["Join Waitlist", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#vision",
							className: "inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/60 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-2",
							children: ["See the story", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })]
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtensionMockup, {})]
			})
		]
	});
}
function ExtensionMockup() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative float-slow",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "absolute -inset-8 -z-10 rounded-[36px] opacity-60 blur-3xl",
			style: { background: "var(--gradient-brand)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-card overflow-hidden rounded-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 border-b border-border/70 bg-surface/80 px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-[#ff5f57]/70" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-[#febc2e]/70" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-[#28c840]/70" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "ml-3 flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto max-w-[220px] rounded-md border border-border/60 bg-background/70 px-3 py-1 text-center text-[11px] text-muted-foreground font-mono",
							children: "chat.openai.com"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-1 rounded-md border border-border-strong bg-background/70 px-2 py-1 text-[10px] font-medium text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "h-1.5 w-1.5 rounded-full",
							style: { background: "var(--gradient-brand)" }
						}), "kodean"]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-0 lg:grid-cols-[1fr_260px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-border/70 bg-background/40 p-5 font-mono text-[12.5px] leading-[1.7] lg:border-b-0 lg:border-r",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeLine, {
							n: 1,
							tokens: [
								["const ", "text-[#c792ea]"],
								["debounce ", "text-[#82aaff]"],
								["= (fn, ", "text-foreground/80"],
								["ms", "text-[#f78c6c]"],
								[") => {", "text-foreground/80"]
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeLine, {
							n: 2,
							tokens: [
								["  ", ""],
								["let ", "text-[#c792ea]"],
								["t;", "text-foreground/80"]
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeLine, {
							n: 3,
							highlighted: true,
							tokens: [
								["  ", ""],
								["return ", "text-[#c792ea]"],
								["(...args) => {", "text-foreground/80"]
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeLine, {
							n: 4,
							highlighted: true,
							tokens: [
								["    ", ""],
								["clearTimeout", "text-[#82aaff]"],
								["(t);", "text-foreground/80"]
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeLine, {
							n: 5,
							highlighted: true,
							tokens: [
								["    t = ", "text-foreground/80"],
								["setTimeout", "text-[#82aaff]"],
								["(() => ", "text-foreground/80"],
								["fn", "text-[#82aaff]"],
								["(...args), ", "text-foreground/80"],
								["ms", "text-[#f78c6c]"],
								[");", "text-foreground/80"]
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeLine, {
							n: 6,
							tokens: [["  };", "text-foreground/80"]]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CodeLine, {
							n: 7,
							tokens: [["};", "text-foreground/80"]]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3 w-3 text-accent" }), "Explanation"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[13px] leading-relaxed text-foreground/90",
							children: [
								"These lines return a new function that",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient font-medium",
									children: "cancels the previous timer"
								}),
								" and starts a fresh one — so ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-accent",
									children: "fn"
								}),
								" only runs after inputs settle."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border/70 bg-surface/60 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground",
								children: "Why it exists"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12px] text-foreground/80",
								children: "Prevents expensive work from firing on every keystroke."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: WAITLIST_FORM_URL,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-border-strong bg-surface px-3 py-2 text-[12px] font-medium text-foreground transition-colors hover:bg-surface-2",
							children: ["Join waitlist", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
						})
					]
				})]
			})]
		})]
	});
}
function CodeLine({ n, tokens, highlighted }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `-mx-5 flex gap-4 px-5 ${highlighted ? "bg-primary/10 border-l-2 border-primary" : "border-l-2 border-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "w-4 select-none text-right text-muted-foreground/60",
			children: n
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "whitespace-pre",
			children: tokens.map(([t, cls], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cls || "text-foreground/90",
				children: t
			}, i))
		})]
	});
}
var CONVERSATION_SCENES = [
	{
		otherSpeaker: "Engineering Manager",
		otherMessage: "Can you quickly update this function?",
		selfSpeaker: "You",
		selfReply: "Sure...",
		selfRealization: "Wait... I don't actually remember why this works."
	},
	{
		otherSpeaker: "Interviewer",
		otherMessage: "Can you explain why you chose this approach?",
		selfSpeaker: "You",
		selfReply: "I know it works...",
		selfRealization: "...but I can't explain why."
	},
	{
		otherSpeaker: "Professor",
		otherMessage: "Walk me through your solution.",
		selfSpeaker: "Student",
		selfReply: "I wrote it last week...",
		selfRealization: "I don't remember the logic anymore."
	},
	{
		otherSpeaker: "Teammate",
		otherMessage: "Can we extend this feature?",
		selfSpeaker: "You",
		selfReply: "We can...",
		selfRealization: "First I need to understand this part again."
	}
];
function Problem() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "vision",
		className: "relative border-t border-border/60 py-16 lg:py-18",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "💭 A Familiar Feeling" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-5 max-w-3xl font-display text-[40px] font-semibold leading-[1.02] tracking-tight sm:text-[52px] lg:text-[56px]",
					children: [
						"Shipping is easy.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Owning the code isn't."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-[17px] leading-relaxed text-muted-foreground",
					children: "Every developer eventually faces the same moment. The code works—until someone asks you to change it, explain it, or build on top of it. That's when understanding matters."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConversationCard, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-12 max-w-3xl text-center font-display text-xl leading-snug text-foreground/90 sm:text-2xl",
					children: "\"Understanding your code shouldn't begin when someone asks you about it.\""
				})
			]
		})
	});
}
function ConversationCard() {
	const [sceneIndex, setSceneIndex] = (0, import_react.useState)(0);
	const [visible, setVisible] = (0, import_react.useState)(true);
	const scene = CONVERSATION_SCENES[sceneIndex];
	(0, import_react.useEffect)(() => {
		const interval = window.setInterval(() => {
			setVisible(false);
			window.setTimeout(() => {
				setSceneIndex((current) => (current + 1) % CONVERSATION_SCENES.length);
				setVisible(true);
			}, 320);
		}, 5500);
		return () => window.clearInterval(interval);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass-card mx-auto max-w-2xl overflow-hidden rounded-2xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 border-b border-border/70 bg-surface/80 px-5 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-muted-foreground/40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-muted-foreground/40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-muted-foreground/40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground",
					children: "Messages"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-5 p-5 sm:p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-w-[85%]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `transition-all duration-300 ease-out motion-reduce:transition-none ${visible ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-1.5 text-[11px] font-medium text-muted-foreground",
							children: scene.otherSpeaker
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "min-h-[52px] rounded-2xl rounded-tl-md border border-border/70 bg-surface/60 px-4 py-3 text-sm leading-relaxed text-foreground/90",
							children: scene.otherMessage
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ml-auto max-w-[85%]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `transition-all duration-300 ease-out motion-reduce:transition-none ${visible ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"}`,
						style: { transitionDelay: visible ? "40ms" : "0ms" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-1.5 text-right text-[11px] font-medium text-muted-foreground",
							children: scene.selfSpeaker
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "min-h-[44px] rounded-2xl rounded-tr-md border border-border/70 bg-surface-2/80 px-4 py-3 text-sm leading-relaxed text-foreground/90",
							children: scene.selfReply
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ml-auto max-w-[85%]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `flex justify-end transition-opacity duration-300 ease-out motion-reduce:transition-none ${visible ? "opacity-100" : "opacity-0"}`,
						style: { transitionDelay: visible ? "80ms" : "0ms" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypingIndicator, {})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ml-auto max-w-[85%]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `transition-all duration-300 ease-out motion-reduce:transition-none ${visible ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"}`,
						style: { transitionDelay: visible ? "120ms" : "0ms" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-1.5 text-right text-[11px] font-medium text-muted-foreground",
							children: scene.selfSpeaker
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "min-h-[52px] rounded-2xl rounded-tr-md border border-border/70 bg-surface-2/80 px-4 py-3 text-sm leading-relaxed text-muted-foreground",
							children: scene.selfRealization
						})]
					})
				})
			]
		})]
	});
}
function TypingIndicator() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center rounded-full border border-border/60 bg-surface/50 px-3 py-1.5 text-[12px] text-muted-foreground/80",
		children: [
			"(typing",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "inline-block w-[1.1em] text-left",
				children: "..."
			}),
			")"
		]
	});
}
function Solution() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "solution",
		className: "relative border-t border-border/60 py-16 lg:py-18",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "The Learning Journey" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl",
					children: [
						"kodean is where generated code",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
						" becomes understanding."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground",
					children: "Not another code generator. A focused flow that turns fast output into durable engineering confidence."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid grid-cols-1 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: [
							{
								title: "Highlight code",
								desc: "Start with the exact snippet you copied from AI.",
								icon: Layers
							},
							{
								title: "Understand",
								desc: "Read what every line does in plain engineering language.",
								icon: BookOpen
							},
							{
								title: "Think",
								desc: "See why this approach works and when it breaks.",
								icon: Lightbulb
							},
							{
								title: "Practice",
								desc: "Answer short checks to prove understanding, not memory.",
								icon: Target
							},
							{
								title: "Remember",
								desc: "Capture concepts so they stay usable in real projects.",
								icon: FileText
							},
							{
								title: "Build confidence",
								desc: "Ship code you can explain, debug, and evolve with confidence.",
								icon: Check
							}
						].map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: `glass-card group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong ${i % 2 !== 0 ? "lg:translate-y-8" : ""}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									"aria-hidden": true,
									className: "absolute -right-16 -top-16 h-36 w-36 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25",
									style: { background: "var(--gradient-brand)" }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-4 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex h-9 w-9 items-center justify-center rounded-lg text-primary-foreground",
										style: { background: "var(--gradient-brand)" },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(step.icon, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-[11px] text-muted-foreground",
										children: ["0", i + 1]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold text-foreground",
									children: step.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: step.desc
								})
							]
						}, step.title))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: WAITLIST_FORM_URL,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-2",
							children: ["Start learning with kodean", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					})]
				})
			]
		})
	});
}
function Features() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "features",
		className: "border-t border-border/60 py-16 lg:py-18",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Outcomes" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl",
					children: "Learn faster, forget less, build with confidence."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: [
						{
							icon: BookOpen,
							title: "See the logic",
							desc: "Understand each line so you can reason before you refactor.",
							accent: "oklch(0.72 0.17 250)"
						},
						{
							icon: Lightbulb,
							title: "Know the why",
							desc: "Learn tradeoffs, assumptions, and intent behind the snippet.",
							accent: "oklch(0.78 0.16 85)"
						},
						{
							icon: Compass,
							title: "Think in context",
							desc: "Connect generated code to your architecture and constraints.",
							accent: "oklch(0.70 0.18 165)"
						},
						{
							icon: Target,
							title: "Practice actively",
							desc: "Quick checks verify understanding before confidence is assumed.",
							accent: "oklch(0.66 0.19 275)"
						},
						{
							icon: PenLine,
							title: "Capture patterns",
							desc: "Save reusable ideas you can apply in future decisions.",
							accent: "oklch(0.68 0.19 340)"
						},
						{
							icon: Brain,
							title: "Remember longer",
							desc: "Turn one-off explanations into lasting engineering knowledge.",
							accent: "oklch(0.72 0.17 30)"
						}
					].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:bg-surface/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30",
								style: { background: f.accent }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl text-white",
								style: {
									background: `linear-gradient(135deg, ${f.accent}, oklch(0.55 0.18 275))`,
									boxShadow: `0 8px 24px -12px ${f.accent}`
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, {
									className: "h-4.5 w-4.5",
									strokeWidth: 2
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[18px] font-semibold text-foreground",
								children: f.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: f.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex items-center gap-1.5 text-[12px] font-medium text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100",
								children: ["Learn more", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
							})
						]
					}, f.title))
				})
			]
		})
	});
}
function Comparison() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-t border-border/60 py-16 lg:py-18",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Why kodean" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl",
					children: [
						"AI writes code.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"kodean builds engineers."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid grid-cols-1 gap-4 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-card rounded-2xl p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-medium uppercase tracking-wider text-muted-foreground",
								children: "Typical workflow"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 font-display text-2xl font-semibold text-foreground",
								children: "Ship now, debug understanding later"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-3",
								children: [
									"Generates quickly",
									"Optimizes for output",
									"Leaves understanding behind"
								].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3 text-sm text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-border-strong",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3" })
									}), t]
								}, t))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-card relative overflow-hidden rounded-2xl p-8",
						style: { borderColor: "oklch(0.66 0.19 275 / 0.4)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-30 blur-3xl",
								style: { background: "var(--gradient-brand)" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-medium uppercase tracking-wider text-accent",
								children: "kodean"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 font-display text-2xl font-semibold text-foreground",
								children: "Learn while you build"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-3",
								children: [
									"Makes code explainable",
									"Builds engineering judgment",
									"Improves long-term confidence",
									"Grows reusable knowledge"
								].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-3 text-sm text-foreground/90",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full text-primary-foreground",
										style: { background: "var(--gradient-brand)" },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" })
									}), t]
								}, t))
							})
						]
					})]
				})
			]
		})
	});
}
function MessageSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "message",
		className: "border-t border-border/60 py-16 lg:py-18",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-card relative overflow-hidden rounded-3xl p-8 text-center sm:p-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-35 blur-3xl",
						style: { background: "var(--gradient-brand)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, {
						center: true,
						children: "Brand Message"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mx-auto mt-5 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl",
						children: [
							"Every line has a reason.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"kodean helps you discover it."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-muted-foreground",
						children: "Understand. Think. Remember. Grow. The future belongs to engineers who can explain their systems, not only ship them."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: WAITLIST_FORM_URL,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]",
						style: {
							background: "var(--gradient-brand)",
							boxShadow: "var(--shadow-glow)"
						},
						children: ["Join waitlist", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			})
		})
	});
}
function Waitlist() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "waitlist",
		className: "border-t border-border/60 py-16 lg:py-18",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, {
						center: true,
						children: "Early Access"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
						children: "Understand your code before production teaches you."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-[17px] text-muted-foreground",
						children: "Join developers choosing understanding over dependency."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-card mt-10 rounded-2xl p-8 text-center sm:p-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground",
					children: "Click below to join the waitlist. We'll share launch updates and early access details."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: WAITLIST_FORM_URL,
					target: "_blank",
					rel: "noreferrer",
					className: "mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.01]",
					style: {
						background: "var(--gradient-brand)",
						boxShadow: "var(--shadow-glow)"
					},
					children: ["Join Waitlist", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border/60 py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-semibold tracking-tight",
					children: "kodean"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-sm text-muted-foreground sm:text-right",
				children: "Understanding is the ultimate developer tool."
			})]
		})
	});
}
function SectionEyebrow({ children, center }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground ${center ? "mx-auto" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "h-1.5 w-1.5 rounded-full",
			style: { background: "var(--gradient-brand)" }
		}), children]
	});
}
//#endregion
export { Landing as component };
