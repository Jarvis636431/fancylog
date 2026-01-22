const ICONS: Record<string, string[]> = {
  cat: [
    " /\\_/\\",
    "( o.o )",
    " > ^ <",
  ],
  rocket: [
    "   /\\",
    "  /  \\",
    " |    |",
    " |NASA|",
    " |    |",
    " /____\\",
    "  /||\\",
    "  /||\\",
    "   **",
  ],
  coffee: [
    "  ( (",
    "   ) )",
    "........",
    "|      |]",
    "\\      /",
    " `----'",
  ],
  party: [
    "  .-.",
    " (   )",
    "  `-'",
    "  /|\\",
    " / | \\",
    "    |",
    "   / \\",
    "  * * *",
  ],
  wave: [
    "  o/",
    " /| ",
    " / \\",
  ],
};

export function renderIcon(name: keyof typeof ICONS): string {
  return ICONS[name].join("\n");
}
