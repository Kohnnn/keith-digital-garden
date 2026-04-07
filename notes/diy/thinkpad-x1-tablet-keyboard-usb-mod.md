---
title: "ThinkPad X1 Tablet Keyboard to USB Mod"
tags: ["diy", "hardware", "thinkpad", "keyboard-mod", "usb-hack"]
keywords: ["ThinkPad X1 Tablet", "keyboard mod", "USB hack", "pogo pin", "portable keyboard", "X1 Tablet Gen 2"]
note_id: "thinkpad-x1-tablet-keyboard-usb-mod"
description: "Turning a ThinkPad X1 Tablet (2016/2017) snap-on keyboard into a plug-and-play standalone USB keyboard using a 3D-printed adapter with no custom PCB required."
created: 2026-04-07
updated: 2026-04-07
cssclasses: ["diy", "hardware"]
---

![ThinkPad X1 Tablet Keyboard USB Mod](https://img.youtube.com/vi/g0B0aTISIHY/maxresdefault.jpg)

## context + claim

This mod transforms the Lenovo ThinkPad X1 Tablet (Gen 1/Gen 2, 2016-2017) magnetic snap-on keyboard into a standalone USB keyboard. The secret sauce: a 3D-printed adapter by [CodeName X](https://www.printables.com/model/70116-thinkpad-x1-tablet-20162017-keyboard-to-usb-hack-tool) that uses aluminum foil as conductive pads and magnets to press everything against the pogo pins — no custom PCB, no soldering (mostly).

**Source project:** [Hackaday feature (June 2024)](https://hackaday.com/2024/06/16/use-your-thinkpad-x1-tablets-keyboard-standalone/) | [YouTube walkthrough](https://youtu.be/g0B0aTISIHY) | [Printables STL download](https://www.printables.com/model/70116-thinkpad-x1-tablet-20162017-keyboard-to-usb-hack-tool)

---

## constraint map

**Compatible models:**
- ThinkPad X1 Tablet Gen 1 (2016)
- ThinkPad X1 Tablet Gen 2 (2017)
- These two share identical pogo-pin connectors

**NOT compatible:**
- ThinkPad X1 Tablet Gen 3 — uses different pin layout (single row of 6 pins, different spacing)

**Pinout (Gen 1 & 2, keyboard facing you):**
| Row | Pin 1 | Pin 2 | Pin 3 |
|-----|-------|-------|-------|
| Top | White (D+) | Red (+5V) | NC |
| Bottom | Black (GND) | Green (D-) | NC |

**Gen 3 pinout (different!):**
NC | +5V | D- | D+ | NC | GND

**Critical constraint:** Keep USB cable short — the PCB's impedance-matching resistors aren't optimized for long runs.

---

## risk surface

- **Mechanical durability:** Foil pads can degrade over time; some builders use a Micro-USB breakout board epoxied to the keyboard edge for a more durable connection
- **Touchpad limitations:** Requires Synaptics ThinkPad UltraNav driver — the touchpad is non-functional with standard HID drivers even if the keyboard matrix works
- **No Precision Touchpad gestures:** Advanced multi-touch gestures (3/4-finger swipes, pinch-to-zoom) require Windows PTP recognition, which UltraNav doesn't provide
- **TrackPoint interference:** UltraNav temporarily suppresses touchpad input (~1s) when it detects TrackPoint/keyboard activity; disable via Mouse > UltraNav > PalmCheck settings
- **Fn/Ctrl swap:** Keyboard may register Fn and Ctrl in reversed positions; toggle via Lenovo Vantage app

---

## my take

This is a clever reuse project. The 3D-printed adapter approach is elegant — it turns a disposable accessory into a portable keyboard with minimal parts. The aluminum foil hack is borderline genius for its simplicity.

**If I were building this:**
1. Print the adapter in PETG or ABS for durability
2. Use a short, quality USB cable (shielded if possible)
3. Consider adding a small USB hub inline if you want to preserve the port on your host device
4. For the touchpad, just accept the limitations — two-finger scroll and basic taps are fine; don't chase Precision Touchpad gestures

**3D files available:**
- [Printables.com STL + PDF assembly guide](https://www.printables.com/model/70116-thinkpad-x1-tablet-20162017-keyboard-to-usb-hack-tool)

**Tools needed:** 3D printer, aluminum foil, 2× small circular magnets, any USB-A cable

---

## linkage

- [[thinkpad-x1-tablet-gen3-keyboard-hack]] — Gen 3 variant with different pinout and 6-pin connector
- [[usb-hid-basics]] — Understanding HID over USB for keyboard projects
- [[3d-printed-electronics-housings]] — General patterns for integrating 3D prints with electronics

**External resources:**
- [Full pinout reference (spawn.link)](https://spawn.link/posts/2019-02-18_-_lenovo_x1_tablet_keyboard/)
- [Community discussion (Reddit r/thinkpad)](https://www.reddit.com/r/thinkpad/comments/a4wm07/hack_x1_tablet_keyboard_with_usb/)
- [Lenovo schematics (laptop-schematics.com)](https://laptop-schematics.com/db/78/ThinkPad%20Tablet%20series/) — for the Gen 2 (20JB/20JC)
