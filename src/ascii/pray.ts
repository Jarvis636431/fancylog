const PRAYER_ART = [
  "          _.-'''''-._",
  "        .'  _     _  '.",
  "       /   (_)   (_)   \\",
  "      |  ,           ,  |",
  "      |  \\`.       .`/  |",
  "       \\  '.`'---'`.'  /",
  "        '.  `-._.-`  .'",
  "          '-._____.-'",
  "             /| |\\",
  "            /_| |_\\",
  "              | |",
  "              | |",
  "             /   \\",
];

export function renderPrayer(): string {
  return PRAYER_ART.join("\n");
}
