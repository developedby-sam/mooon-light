import { Scheme } from "ayu";

export default (
  scheme: Scheme,
  name: string
) => `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>author</key>
  <string>Samir Ansari</string>
  <key>colorSpaceName</key>
  <string>sRGB</string>
  <key>name</key>
  <string>mooon-light</string>
  <key>semanticClass</key>
  <string>ayu.${name}</string>
  <key>settings</key>
  <array>
    <dict>
      <key>settings</key>
      <dict>
        <key>background</key>
        <string>${scheme.ui.panel.bg.hex()}</string>
        <key>caret</key>
        <string>${scheme.common.accent.hex()}</string>
        <key>foreground</key>
        <string>${scheme.common.fg.hex()}</string>
        <key>invisibles</key>
        <string>${scheme.ui.gutter.normal.hex()}</string>
        <key>lineHighlight</key>
        <string>${scheme.ui.line.hex()}</string>
        <key>inactiveSelection</key>
        <string>${scheme.ui.selection.inactive.hex()}</string>
        <key>selection</key>
        <string>${scheme.ui.selection.bg.hex()}</string>
        <key>selectionBorder</key>
        <string>${scheme.ui.selection.border.hex()}</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Comments</string>
      <key>scope</key>
      <string>comment</string>
      <key>settings</key>
      <dict>
        <key>fontStyle</key>
        <string>italic</string>
        <key>foreground</key>
        <string>${scheme.syntax.comment.hex()}</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Keyword</string>
      <key>scope</key>
      <string>keyword, storage</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>${scheme.syntax.keyword.hex()}</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Constant</string>
      <key>scope</key>
      <string>constant</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>${scheme.syntax.constant.hex()}</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>String</string>
      <key>scope</key>
      <string>string</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>${scheme.syntax.string.hex()}</string>
      </dict>
    </dict>
    <dict>
      <key>name</key>
      <string>Escape</string>
      <key>scope</key>
      <string>constant.character.escape</string>
      <key>settings</key>
      <dict>
        <key>foreground</key>
        <string>${scheme.syntax.regexp.hex()}</string>
      </dict>
    </dict>
  </array>
</dict>
</plist>`;
