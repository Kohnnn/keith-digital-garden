import type { InteractiveArticleDescriptor } from "./moduleRegistry"

export const GENERATED_INTERACTIVE_ARTICLES: InteractiveArticleDescriptor[] = [
  {
    "id": "airfoil",
    "title": "Airfoil",
    "author": "Bartosz Ciechanowski",
    "url": "https://ciechanow.ski/airfoil/",
    "lead": "Deep fluid-dynamics explainer focused on why wings generate lift, combining airflow, pressure, viscosity, and boundary-layer scenes that can be manipulated in real time.",
    "about": [
      "Deep fluid-dynamics explainer focused on why wings generate lift, combining airflow, pressure, viscosity, and boundary-layer scenes that can be manipulated in real time.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 26,
    "modules": [
      {
        "sceneId": "airfoil:module-01",
        "articleId": "airfoil",
        "moduleId": "module-01",
        "index": 1,
        "title": "Airfoil",
        "kind": "interactive simulation/diagram module",
        "description": "Using the slider to change just one property of this substance, we can end up with vastly different effects on the liveliness of that flow: Over the course of this blog post we’...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "airfoil",
        "visual": "flow-body",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "angle",
            "label": "angle",
            "min": -18,
            "max": 22,
            "step": 1,
            "value": 4
          },
          {
            "kind": "range",
            "id": "speed",
            "label": "flow speed",
            "min": 0.4,
            "max": 2.8,
            "step": 0.05,
            "value": 1.3
          },
          {
            "kind": "range",
            "id": "detail",
            "label": "detail",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "angle": 4,
          "speed": 1.3,
          "detail": 0.55
        },
        "sharedGroup": "airfoil-core",
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "airfoil:module-02",
        "articleId": "airfoil",
        "moduleId": "module-02",
        "index": 2,
        "title": "Visualizing Flow",
        "kind": "interactive simulation/diagram module",
        "description": "Using the slider to change just one property of this substance, we can end up with vastly different effects on the liveliness of that flow: Over the course of this blog post we’...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "airfoil",
        "visual": "flow-body",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "angle",
            "label": "angle",
            "min": -18,
            "max": 22,
            "step": 1,
            "value": 4
          },
          {
            "kind": "range",
            "id": "speed",
            "label": "flow speed",
            "min": 0.4,
            "max": 2.8,
            "step": 0.05,
            "value": 1.3
          },
          {
            "kind": "range",
            "id": "detail",
            "label": "detail",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "angle": 4,
          "speed": 1.3,
          "detail": 0.55
        },
        "sharedGroup": "airfoil-core",
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "airfoil:module-03",
        "articleId": "airfoil",
        "moduleId": "module-03",
        "index": 3,
        "title": "Velocity",
        "kind": "interactive simulation/diagram module",
        "description": "If we wanted to, we could draw a velocity arrow at any of the seemingly empty spots on the right side.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "airfoil",
        "visual": "velocity-field",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "angle",
            "label": "angle",
            "min": -18,
            "max": 22,
            "step": 1,
            "value": 4
          },
          {
            "kind": "range",
            "id": "speed",
            "label": "flow speed",
            "min": 0.4,
            "max": 2.8,
            "step": 0.05,
            "value": 1.3
          },
          {
            "kind": "range",
            "id": "detail",
            "label": "detail",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "angle": 4,
          "speed": 1.3,
          "detail": 0.55
        },
        "sharedGroup": "airfoil-core",
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "airfoil:module-04",
        "articleId": "airfoil",
        "moduleId": "module-04",
        "index": 4,
        "title": "Relative Velocity",
        "kind": "interactive simulation/diagram module",
        "description": "I adjusted the lengths of the arrows to prevent them from visually overlapping, but I also made sure to maintain their relative lengths - if one arrow is twice as long as the ot...",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "airfoil",
        "visual": "velocity-field",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "angle",
            "label": "angle",
            "min": -18,
            "max": 22,
            "step": 1,
            "value": 4
          },
          {
            "kind": "range",
            "id": "speed",
            "label": "flow speed",
            "min": 0.4,
            "max": 2.8,
            "step": 0.05,
            "value": 1.3
          },
          {
            "kind": "range",
            "id": "detail",
            "label": "detail",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "angle": 4,
          "speed": 1.3,
          "detail": 0.55
        },
        "sharedGroup": "airfoil-core",
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "airfoil:module-05",
        "articleId": "airfoil",
        "moduleId": "module-05",
        "index": 5,
        "title": "Pressure",
        "kind": "interactive simulation/diagram module",
        "description": "Maps pressure distribution and resulting force vectors across the shape to explain motion/lift/buoyancy effects.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "airfoil",
        "visual": "pressure-map",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "angle",
            "label": "angle",
            "min": -18,
            "max": 22,
            "step": 1,
            "value": 4
          },
          {
            "kind": "range",
            "id": "speed",
            "label": "flow speed",
            "min": 0.4,
            "max": 2.8,
            "step": 0.05,
            "value": 1.3
          },
          {
            "kind": "range",
            "id": "detail",
            "label": "detail",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "angle": 4,
          "speed": 1.3,
          "detail": 0.55
        },
        "sharedGroup": "airfoil-core",
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "airfoil:module-06",
        "articleId": "airfoil",
        "moduleId": "module-06",
        "index": 6,
        "title": "Visualizing Pressure",
        "kind": "interactive simulation/diagram module",
        "description": "Maps pressure distribution and resulting force vectors across the shape to explain motion/lift/buoyancy effects.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "airfoil",
        "visual": "pressure-map",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "angle",
            "label": "angle",
            "min": -18,
            "max": 22,
            "step": 1,
            "value": 4
          },
          {
            "kind": "range",
            "id": "speed",
            "label": "flow speed",
            "min": 0.4,
            "max": 2.8,
            "step": 0.05,
            "value": 1.3
          },
          {
            "kind": "range",
            "id": "detail",
            "label": "detail",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "angle": 4,
          "speed": 1.3,
          "detail": 0.55
        },
        "sharedGroup": "airfoil-core",
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "airfoil:module-07",
        "articleId": "airfoil",
        "moduleId": "module-07",
        "index": 7,
        "title": "Airfoil Flow",
        "kind": "interactive simulation/diagram module",
        "description": "Using the slider to change just one property of this substance, we can end up with vastly different effects on the liveliness of that flow: Over the course of this blog post we’...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "airfoil",
        "visual": "flow-body",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "angle",
            "label": "angle",
            "min": -18,
            "max": 22,
            "step": 1,
            "value": 4
          },
          {
            "kind": "range",
            "id": "speed",
            "label": "flow speed",
            "min": 0.4,
            "max": 2.8,
            "step": 0.05,
            "value": 1.3
          },
          {
            "kind": "range",
            "id": "detail",
            "label": "detail",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "angle": 4,
          "speed": 1.3,
          "detail": 0.55
        },
        "sharedGroup": "airfoil-core",
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "airfoil:module-08",
        "articleId": "airfoil",
        "moduleId": "module-08",
        "index": 8,
        "title": "Viscosity",
        "kind": "interactive simulation/diagram module",
        "description": "Demonstrates viscous drag and flow damping as fluid properties are adjusted.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "airfoil",
        "visual": "flow-body",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "angle",
            "label": "angle",
            "min": -18,
            "max": 22,
            "step": 1,
            "value": 4
          },
          {
            "kind": "range",
            "id": "speed",
            "label": "flow speed",
            "min": 0.4,
            "max": 2.8,
            "step": 0.05,
            "value": 1.3
          },
          {
            "kind": "range",
            "id": "detail",
            "label": "detail",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "angle": 4,
          "speed": 1.3,
          "detail": 0.55
        },
        "sharedGroup": "airfoil-core",
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "airfoil:module-09",
        "articleId": "airfoil",
        "moduleId": "module-09",
        "index": 9,
        "title": "Boundary Layer",
        "kind": "interactive simulation/diagram module",
        "description": "Shows near-surface flow behavior and boundary-layer development around geometry.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "airfoil",
        "visual": "boundary-layer",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "angle",
            "label": "angle",
            "min": -18,
            "max": 22,
            "step": 1,
            "value": 4
          },
          {
            "kind": "range",
            "id": "speed",
            "label": "flow speed",
            "min": 0.4,
            "max": 2.8,
            "step": 0.05,
            "value": 1.3
          },
          {
            "kind": "range",
            "id": "detail",
            "label": "detail",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "angle": 4,
          "speed": 1.3,
          "detail": 0.55
        },
        "sharedGroup": "airfoil-core",
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "airfoil:module-10",
        "articleId": "airfoil",
        "moduleId": "module-10",
        "index": 10,
        "title": "Airfoil Shapes",
        "kind": "interactive simulation/diagram module",
        "description": "Using the slider to change just one property of this substance, we can end up with vastly different effects on the liveliness of that flow: Over the course of this blog post we’...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "airfoil",
        "visual": "flow-body",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "angle",
            "label": "angle",
            "min": -18,
            "max": 22,
            "step": 1,
            "value": 4
          },
          {
            "kind": "range",
            "id": "speed",
            "label": "flow speed",
            "min": 0.4,
            "max": 2.8,
            "step": 0.05,
            "value": 1.3
          },
          {
            "kind": "range",
            "id": "detail",
            "label": "detail",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "angle": 4,
          "speed": 1.3,
          "detail": 0.55
        },
        "sharedGroup": "airfoil-core",
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "airfoil:module-11",
        "articleId": "airfoil",
        "moduleId": "module-11",
        "index": 11,
        "title": "Further Reading and Watching",
        "kind": "reference/narrative section",
        "description": "Narrative/reference section in Airfoil that summarizes results and links supporting resources.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "airfoil",
        "visual": "flow-body",
        "layout": "note",
        "noteOnly": true,
        "controls": [],
        "defaultPreset": {},
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "airfoil:module-12",
        "articleId": "airfoil",
        "moduleId": "module-12",
        "index": 12,
        "title": "Final Words",
        "kind": "reference/narrative section",
        "description": "Narrative/reference section in Airfoil that summarizes results and links supporting resources.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "airfoil",
        "visual": "flow-body",
        "layout": "note",
        "noteOnly": true,
        "controls": [],
        "defaultPreset": {},
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "airfoil:module-13",
        "articleId": "airfoil",
        "moduleId": "module-13",
        "index": 13,
        "title": "The slider lets you control the speed of",
        "kind": "interactive simulation/diagram module",
        "description": "The slider lets you control the speed of time to observe in detail how the falling leaves and the bending blades of grass are visibly affected by the wind sweeping through this ...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "airfoil",
        "visual": "flow-body",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "angle",
            "label": "angle",
            "min": -18,
            "max": 22,
            "step": 1,
            "value": 4
          },
          {
            "kind": "range",
            "id": "speed",
            "label": "flow speed",
            "min": 0.4,
            "max": 2.8,
            "step": 0.05,
            "value": 1.3
          },
          {
            "kind": "range",
            "id": "detail",
            "label": "detail",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "angle": 4,
          "speed": 1.3,
          "detail": 0.55
        },
        "sharedGroup": "airfoil-core",
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "airfoil:module-14",
        "articleId": "airfoil",
        "moduleId": "module-14",
        "index": 14,
        "title": "We can mimic this behavior with a collection",
        "kind": "interactive simulation/diagram module",
        "description": "We can mimic this behavior with a collection of small arrows placed all over the area, as seen on the right side: Each arrow represents the direction and the speed of the flow o...",
        "controlsSummary": "implicit controls",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "airfoil",
        "visual": "flow-body",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "angle",
            "label": "angle",
            "min": -18,
            "max": 22,
            "step": 1,
            "value": 4
          },
          {
            "kind": "range",
            "id": "speed",
            "label": "flow speed",
            "min": 0.4,
            "max": 2.8,
            "step": 0.05,
            "value": 1.3
          },
          {
            "kind": "range",
            "id": "detail",
            "label": "detail",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "angle": 4,
          "speed": 1.3,
          "detail": 0.55
        },
        "sharedGroup": "airfoil-core",
        "gestures": []
      },
      {
        "sceneId": "airfoil:module-15",
        "articleId": "airfoil",
        "moduleId": "module-15",
        "index": 15,
        "title": "Note that we have some flexibility in how",
        "kind": "interactive simulation/diagram module",
        "description": "Note that we have some flexibility in how the speed of wind corresponds to the length of an arrow .",
        "controlsSummary": "implicit controls",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "airfoil",
        "visual": "flow-body",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "angle",
            "label": "angle",
            "min": -18,
            "max": 22,
            "step": 1,
            "value": 4
          },
          {
            "kind": "range",
            "id": "speed",
            "label": "flow speed",
            "min": 0.4,
            "max": 2.8,
            "step": 0.05,
            "value": 1.3
          },
          {
            "kind": "range",
            "id": "detail",
            "label": "detail",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "angle": 4,
          "speed": 1.3,
          "detail": 0.55
        },
        "sharedGroup": "airfoil-core",
        "gestures": []
      },
      {
        "sceneId": "airfoil:module-16",
        "articleId": "airfoil",
        "moduleId": "module-16",
        "index": 16,
        "title": "Each marker represents an object so small and",
        "kind": "interactive simulation/diagram module",
        "description": "Each marker represents an object so small and light that it instantly picks up the speed of the surrounding airflow.",
        "controlsSummary": "implicit controls",
        "responseSummary": "particle/marker traces update as flow state changes",
        "renderer": "canvas",
        "family": "airfoil",
        "visual": "flow-body",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "angle",
            "label": "angle",
            "min": -18,
            "max": 22,
            "step": 1,
            "value": 4
          },
          {
            "kind": "range",
            "id": "speed",
            "label": "flow speed",
            "min": 0.4,
            "max": 2.8,
            "step": 0.05,
            "value": 1.3
          },
          {
            "kind": "range",
            "id": "detail",
            "label": "detail",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "angle": 4,
          "speed": 1.3,
          "detail": 0.55
        },
        "sharedGroup": "airfoil-core",
        "gestures": []
      },
      {
        "sceneId": "airfoil:module-17",
        "articleId": "airfoil",
        "moduleId": "module-17",
        "index": 17,
        "title": "In fact, the motion of each marker is",
        "kind": "interactive simulation/diagram module",
        "description": "In fact, the motion of each marker is equivalent to the motion of the parcel of air right around it.",
        "controlsSummary": "implicit controls",
        "responseSummary": "particle/marker traces update as flow state changes",
        "renderer": "canvas",
        "family": "airfoil",
        "visual": "flow-body",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "angle",
            "label": "angle",
            "min": -18,
            "max": 22,
            "step": 1,
            "value": 4
          },
          {
            "kind": "range",
            "id": "speed",
            "label": "flow speed",
            "min": 0.4,
            "max": 2.8,
            "step": 0.05,
            "value": 1.3
          },
          {
            "kind": "range",
            "id": "detail",
            "label": "detail",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "angle": 4,
          "speed": 1.3,
          "detail": 0.55
        },
        "sharedGroup": "airfoil-core",
        "gestures": []
      },
      {
        "sceneId": "airfoil:module-18",
        "articleId": "airfoil",
        "moduleId": "module-18",
        "index": 18,
        "title": "If you slow down time , you’ll be",
        "kind": "interactive simulation/diagram module",
        "description": "If you slow down time , you’ll be able to see how each marker just moves in the direction of the arrows underneath it.",
        "controlsSummary": "implicit controls",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes; particle/marker traces update as flow state changes",
        "renderer": "canvas",
        "family": "airfoil",
        "visual": "flow-body",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "angle",
            "label": "angle",
            "min": -18,
            "max": 22,
            "step": 1,
            "value": 4
          },
          {
            "kind": "range",
            "id": "speed",
            "label": "flow speed",
            "min": 0.4,
            "max": 2.8,
            "step": 0.05,
            "value": 1.3
          },
          {
            "kind": "range",
            "id": "detail",
            "label": "detail",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "angle": 4,
          "speed": 1.3,
          "detail": 0.55
        },
        "sharedGroup": "airfoil-core",
        "gestures": []
      },
      {
        "sceneId": "airfoil:module-19",
        "articleId": "airfoil",
        "moduleId": "module-19",
        "index": 19,
        "title": "I also made each marker leave a little",
        "kind": "interactive simulation/diagram module",
        "description": "I also made each marker leave a little ghost trail behind it - this lets us track the path the air, as represented by the marker , took on the way to its current position.",
        "controlsSummary": "implicit controls",
        "responseSummary": "particle/marker traces update as flow state changes",
        "renderer": "canvas",
        "family": "airfoil",
        "visual": "flow-body",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "angle",
            "label": "angle",
            "min": -18,
            "max": 22,
            "step": 1,
            "value": 4
          },
          {
            "kind": "range",
            "id": "speed",
            "label": "flow speed",
            "min": 0.4,
            "max": 2.8,
            "step": 0.05,
            "value": 1.3
          },
          {
            "kind": "range",
            "id": "detail",
            "label": "detail",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "angle": 4,
          "speed": 1.3,
          "detail": 0.55
        },
        "sharedGroup": "airfoil-core",
        "gestures": []
      },
      {
        "sceneId": "airfoil:module-20",
        "articleId": "airfoil",
        "moduleId": "module-20",
        "index": 20,
        "title": "Let’s pause for a second to emphasize what",
        "kind": "interactive simulation/diagram module",
        "description": "Let’s pause for a second to emphasize what the grass -like arrows and leaf -like markers represent - they both show the velocity of the flow of air, but in slightly different ways.",
        "controlsSummary": "play/pause",
        "responseSummary": "time progression can be paused/resumed for frame-by-frame inspection; vector arrows refresh to reflect direction/magnitude changes; particle/marker traces update as flow state c...",
        "renderer": "canvas",
        "family": "airfoil",
        "visual": "flow-body",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "angle",
            "label": "angle",
            "min": -18,
            "max": 22,
            "step": 1,
            "value": 4
          },
          {
            "kind": "range",
            "id": "speed",
            "label": "flow speed",
            "min": 0.4,
            "max": 2.8,
            "step": 0.05,
            "value": 1.3
          },
          {
            "kind": "range",
            "id": "detail",
            "label": "detail",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          },
          {
            "kind": "action",
            "id": "pause-toggle",
            "label": "pause motion"
          }
        ],
        "defaultPreset": {
          "angle": 4,
          "speed": 1.3,
          "detail": 0.55
        },
        "sharedGroup": "airfoil-core",
        "pauseGroup": "airfoil-motion",
        "gestures": [
          "play/pause"
        ]
      },
      {
        "sceneId": "airfoil:module-21",
        "articleId": "airfoil",
        "moduleId": "module-21",
        "index": 21,
        "title": "An arrow is attached to its fixed point",
        "kind": "interactive simulation/diagram module",
        "description": "An arrow is attached to its fixed point in space, so it represents the current direction and speed of the flow at that location .",
        "controlsSummary": "implicit controls",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "airfoil",
        "visual": "flow-body",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "angle",
            "label": "angle",
            "min": -18,
            "max": 22,
            "step": 1,
            "value": 4
          },
          {
            "kind": "range",
            "id": "speed",
            "label": "flow speed",
            "min": 0.4,
            "max": 2.8,
            "step": 0.05,
            "value": 1.3
          },
          {
            "kind": "range",
            "id": "detail",
            "label": "detail",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "angle": 4,
          "speed": 1.3,
          "detail": 0.55
        },
        "sharedGroup": "airfoil-core",
        "gestures": []
      },
      {
        "sceneId": "airfoil:module-22",
        "articleId": "airfoil",
        "moduleId": "module-22",
        "index": 22,
        "title": "See the whole spectrum of colors in the scale below",
        "kind": "chart/plot module",
        "description": "You can see the whole spectrum of colors in the scale below the plot.",
        "controlsSummary": "implicit controls",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "airfoil",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": []
      },
      {
        "sceneId": "airfoil:module-23",
        "articleId": "airfoil",
        "moduleId": "module-23",
        "index": 23,
        "title": "Change using the second slider",
        "kind": "interactive simulation/diagram module",
        "description": "Before we finish this section, let me bring up visualization of a simple airflow, but this time I’ll give you some control over its direction , which you can change using the se...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "airfoil",
        "visual": "flow-body",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "angle",
            "label": "angle",
            "min": -18,
            "max": 22,
            "step": 1,
            "value": 4
          },
          {
            "kind": "range",
            "id": "speed",
            "label": "flow speed",
            "min": 0.4,
            "max": 2.8,
            "step": 0.05,
            "value": 1.3
          },
          {
            "kind": "range",
            "id": "detail",
            "label": "detail",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "angle": 4,
          "speed": 1.3,
          "detail": 0.55
        },
        "sharedGroup": "airfoil-core",
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "airfoil:module-24",
        "articleId": "airfoil",
        "moduleId": "module-24",
        "index": 24,
        "title": "The first one once more controls the speed",
        "kind": "interactive simulation/diagram module",
        "description": "The first one once more controls the speed of time : Don’t be misled by the frozen arrows, the wind is actually blowing there.",
        "controlsSummary": "implicit controls",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "airfoil",
        "visual": "flow-body",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "angle",
            "label": "angle",
            "min": -18,
            "max": 22,
            "step": 1,
            "value": 4
          },
          {
            "kind": "range",
            "id": "speed",
            "label": "flow speed",
            "min": 0.4,
            "max": 2.8,
            "step": 0.05,
            "value": 1.3
          },
          {
            "kind": "range",
            "id": "detail",
            "label": "detail",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "angle": 4,
          "speed": 1.3,
          "detail": 0.55
        },
        "sharedGroup": "airfoil-core",
        "gestures": []
      },
      {
        "sceneId": "airfoil:module-25",
        "articleId": "airfoil",
        "moduleId": "module-25",
        "index": 25,
        "title": "- you can drag the cube around to change the",
        "kind": "interactive simulation/diagram module",
        "description": "Velocity Let’s take a look at the air particles in a small, marked out volume of space seen in the demonstration below - you can drag the cube around to change the viewing angle.",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly; particle/marker traces update as flow state changes",
        "renderer": "canvas",
        "family": "airfoil",
        "visual": "particle-box",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "airfoil:module-26",
        "articleId": "airfoil",
        "moduleId": "module-26",
        "index": 26,
        "title": "The slider controls the speed of time :",
        "kind": "interactive simulation/diagram module",
        "description": "The slider controls the speed of time : You’re witnessing the motion of over twelve thousand air particles.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes; particle/marker traces update as flow state changes",
        "renderer": "canvas",
        "family": "airfoil",
        "visual": "flow-body",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "angle",
            "label": "angle",
            "min": -18,
            "max": 22,
            "step": 1,
            "value": 4
          },
          {
            "kind": "range",
            "id": "speed",
            "label": "flow speed",
            "min": 0.4,
            "max": 2.8,
            "step": 0.05,
            "value": 1.3
          },
          {
            "kind": "range",
            "id": "detail",
            "label": "detail",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "angle": 4,
          "speed": 1.3,
          "detail": 0.55
        },
        "sharedGroup": "airfoil-core",
        "gestures": [
          "slider/range"
        ]
      }
    ]
  },
  {
    "id": "alpha-compositing",
    "title": "Alpha Compositing",
    "author": "Bartosz Ciechanowski",
    "url": "https://ciechanow.ski/alpha-compositing/",
    "lead": "Pixel-accurate explanation of alpha blending and compositing math, from opacity/coverage to premultiplied alpha and filtering artifacts.",
    "about": [
      "Pixel-accurate explanation of alpha blending and compositing math, from opacity/coverage to premultiplied alpha and filtering artifacts.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 18,
    "modules": [
      {
        "sceneId": "alpha-compositing:module-01",
        "articleId": "alpha-compositing",
        "moduleId": "module-01",
        "index": 1,
        "title": "Alpha Compositing",
        "kind": "interactive simulation/diagram module",
        "description": "As an example, a simple “Cancel” button can be created by a composition of five separate elements: Compositing elements of a “Cancel” Button Compositing is often performed in mu...",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "alpha-compositing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "alpha-compositing:module-02",
        "articleId": "alpha-compositing",
        "moduleId": "module-02",
        "index": 2,
        "title": "Opacity",
        "kind": "interactive simulation/diagram module",
        "description": "Opacity If you ever had a chance to look through rose-tinted glasses you may have experienced something akin to the simulation below.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "alpha-compositing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "alpha-compositing:module-03",
        "articleId": "alpha-compositing",
        "moduleId": "module-03",
        "index": 3,
        "title": "Coverage",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Coverage within Alpha Compositing using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "alpha-compositing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "alpha-compositing:module-04",
        "articleId": "alpha-compositing",
        "moduleId": "module-04",
        "index": 4,
        "title": "Alpha",
        "kind": "interactive simulation/diagram module",
        "description": "In the chart below the slider controls the alpha value of the source, while the red, green, and blue plots depict the values of the RGB components.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes; plots and numeric readouts recalculate with current parameters",
        "renderer": "canvas",
        "family": "alpha-compositing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "alpha-compositing:module-05",
        "articleId": "alpha-compositing",
        "moduleId": "module-05",
        "index": 5,
        "title": "Simple Compositing",
        "kind": "interactive simulation/diagram module",
        "description": "As an example, a simple “Cancel” button can be created by a composition of five separate elements: Compositing elements of a “Cancel” Button Compositing is often performed in mu...",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "alpha-compositing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "alpha-compositing:module-06",
        "articleId": "alpha-compositing",
        "moduleId": "module-06",
        "index": 6,
        "title": "Intermediate Buffers",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Intermediate Buffers within Alpha Compositing using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "alpha-compositing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "alpha-compositing:module-07",
        "articleId": "alpha-compositing",
        "moduleId": "module-07",
        "index": 7,
        "title": "Combining Alphas",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Combining Alphas within Alpha Compositing using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "alpha-compositing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "alpha-compositing:module-08",
        "articleId": "alpha-compositing",
        "moduleId": "module-08",
        "index": 8,
        "title": "Combining Colors",
        "kind": "interactive simulation/diagram module",
        "description": "By dragging the slider you can rotate the quad to see how the samples pick up colors from the bitmap.",
        "controlsSummary": "slider/range, drag",
        "responseSummary": "parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "alpha-compositing",
        "visual": "layer-composite",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "red",
            "label": "red/input",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "range",
            "id": "green",
            "label": "green/gamma",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.42
          },
          {
            "kind": "range",
            "id": "blue",
            "label": "blue/detail",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.68
          },
          {
            "kind": "choice",
            "id": "space",
            "label": "space",
            "value": "sRGB",
            "options": [
              "sRGB",
              "Display P3",
              "XYZ"
            ]
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset palette"
          }
        ],
        "defaultPreset": {
          "red": 0.55,
          "green": 0.42,
          "blue": 0.68,
          "space": "sRGB"
        },
        "gestures": [
          "slider/range",
          "drag"
        ]
      },
      {
        "sceneId": "alpha-compositing:module-09",
        "articleId": "alpha-compositing",
        "moduleId": "module-09",
        "index": 9,
        "title": "Premultiplied Alpha",
        "kind": "interactive simulation/diagram module",
        "description": "In the chart below the slider controls the alpha value of the source, while the red, green, and blue plots depict the values of the RGB components.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes; plots and numeric readouts recalculate with current parameters",
        "renderer": "canvas",
        "family": "alpha-compositing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "alpha-compositing:module-10",
        "articleId": "alpha-compositing",
        "moduleId": "module-10",
        "index": 10,
        "title": "Filtering",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Filtering within Alpha Compositing using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "alpha-compositing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "alpha-compositing:module-11",
        "articleId": "alpha-compositing",
        "moduleId": "module-11",
        "index": 11,
        "title": "Interpolation",
        "kind": "interactive simulation/diagram module",
        "description": "Shows error-vs-complexity behavior around interpolation threshold and overparameterized regime transitions.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "alpha-compositing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "alpha-compositing:module-12",
        "articleId": "alpha-compositing",
        "moduleId": "module-12",
        "index": 12,
        "title": "Compositing Done Right",
        "kind": "interactive simulation/diagram module",
        "description": "As an example, a simple “Cancel” button can be created by a composition of five separate elements: Compositing elements of a “Cancel” Button Compositing is often performed in mu...",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "alpha-compositing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "alpha-compositing:module-13",
        "articleId": "alpha-compositing",
        "moduleId": "module-13",
        "index": 13,
        "title": "A simulation of the behavior of regular sunglasses",
        "kind": "interactive simulation/diagram module",
        "description": "A simulation of the behavior of regular sunglasses is much less complicated, they usually just attenuate some amount of the incoming light: These sunglasses let through only 30%...",
        "controlsSummary": "implicit controls",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "alpha-compositing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "alpha-compositing:module-14",
        "articleId": "alpha-compositing",
        "moduleId": "module-14",
        "index": 14,
        "title": "Drag the triangle on either zoomed or un-zoomed side, the",
        "kind": "interactive simulation/diagram module",
        "description": "In the examples below you can drag the triangle on either zoomed or un-zoomed side, the latter lets you perform finer movements.",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "alpha-compositing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "alpha-compositing:module-15",
        "articleId": "alpha-compositing",
        "moduleId": "module-15",
        "index": 15,
        "title": "More importantly, almost any image with transparency can",
        "kind": "interactive simulation/diagram module",
        "description": "More importantly, almost any image with transparency can be thought of as a partial result of some rendering that, at some later time, will be composed to its final destination:...",
        "controlsSummary": "implicit controls",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "alpha-compositing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "alpha-compositing:module-16",
        "articleId": "alpha-compositing",
        "moduleId": "module-16",
        "index": 16,
        "title": "The arrow symbolizes the blur operation: Blurring non-premultiplied",
        "kind": "interactive simulation/diagram module",
        "description": "The arrow symbolizes the blur operation: Blurring non-premultiplied content The final result has an ugly blue halo around it.",
        "controlsSummary": "implicit controls",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "alpha-compositing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "alpha-compositing:module-17",
        "articleId": "alpha-compositing",
        "moduleId": "module-17",
        "index": 17,
        "title": "Drag the heart around to see how the overlap of",
        "kind": "interactive simulation/diagram module",
        "description": "You can drag the heart around to see how the overlap of the two shapes behaves under different compositing operators.",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "alpha-compositing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "alpha-compositing:module-18",
        "articleId": "alpha-compositing",
        "moduleId": "module-18",
        "index": 18,
        "title": "A dirty buffer may be reset using clear",
        "kind": "interactive simulation/diagram module",
        "description": "A dirty buffer may be reset using clear which can be optimized to just filling memory with zeros.",
        "controlsSummary": "reset/restart",
        "responseSummary": "reset/restart returns simulation to deterministic initial state",
        "renderer": "canvas",
        "family": "alpha-compositing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      }
    ]
  },
  {
    "id": "bicycle",
    "title": "Bicycle",
    "author": "Bartosz Ciechanowski",
    "url": "https://ciechanow.ski/bicycle/",
    "lead": "Mechanics-focused bicycle explainer covering forces, moments, stability, tire slip, braking, and frame stress using animated physics diagrams.",
    "about": [
      "Mechanics-focused bicycle explainer covering forces, moments, stability, tire slip, braking, and frame stress using animated physics diagrams.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 25,
    "modules": [
      {
        "sceneId": "bicycle:module-01",
        "articleId": "bicycle",
        "moduleId": "module-01",
        "index": 1,
        "title": "Bicycle",
        "kind": "interactive simulation/diagram module",
        "description": "In the demonstration below, you can guide the rider with the slider , and you can also drag the view around to change the camera angle: Compared to internal combustion engines o...",
        "controlsSummary": "slider/range, drag",
        "responseSummary": "parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "bicycle",
        "visual": "turn-kinematics",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag"
        ]
      },
      {
        "sceneId": "bicycle:module-02",
        "articleId": "bicycle",
        "moduleId": "module-02",
        "index": 2,
        "title": "Forces",
        "kind": "interactive simulation/diagram module",
        "description": "You can still control the magnitude of the right-pushing force with the slider, but to make our experiments a little easier, I’ll restore that force to its original magnitude af...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "bicycle",
        "visual": "turn-kinematics",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "bicycle:module-03",
        "articleId": "bicycle",
        "moduleId": "module-03",
        "index": 3,
        "title": "Moments",
        "kind": "interactive simulation/diagram module",
        "description": "While it’s harder to visualize the balance of moments, we can still do it by drawing colored rectangles spanning the length of the acting force arrow and the force arm: The red ...",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "bicycle",
        "visual": "turn-kinematics",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "bicycle:module-04",
        "articleId": "bicycle",
        "moduleId": "module-04",
        "index": 4,
        "title": "Up and Down",
        "kind": "interactive simulation/diagram module",
        "description": "In the demonstration below, you can play with a lone wheel rolling down the road.",
        "controlsSummary": "play/pause",
        "responseSummary": "time progression can be paused/resumed for frame-by-frame inspection",
        "renderer": "canvas",
        "family": "bicycle",
        "visual": "turn-kinematics",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "pauseGroup": "bicycle-motion",
        "gestures": [
          "play/pause"
        ]
      },
      {
        "sceneId": "bicycle:module-05",
        "articleId": "bicycle",
        "moduleId": "module-05",
        "index": 5,
        "title": "Forwards and Backwards",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Forwards and Backwards within Bicycle using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "bicycle",
        "visual": "turn-kinematics",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "bicycle:module-06",
        "articleId": "bicycle",
        "moduleId": "module-06",
        "index": 6,
        "title": "Left and Right",
        "kind": "interactive simulation/diagram module",
        "description": "Recall that we’re representing the magnitude of forces using arrows of different sizes, so as long as the length of the right-pointing arrow is equal to the length of the left-p...",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "bicycle",
        "visual": "turn-kinematics",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "bicycle:module-07",
        "articleId": "bicycle",
        "moduleId": "module-07",
        "index": 7,
        "title": "Stability",
        "kind": "interactive simulation/diagram module",
        "description": "Explores stable vs unstable configurations by perturbing the system and observing return/divergence behavior.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "bicycle",
        "visual": "turn-kinematics",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "bicycle:module-08",
        "articleId": "bicycle",
        "moduleId": "module-08",
        "index": 8,
        "title": "Wheels",
        "kind": "interactive simulation/diagram module",
        "description": "The weight of the rider and the bike is then carried by the ground through the two contact points under the wheels: As you’ve probably realized, the yellow slider allows you to ...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "bicycle",
        "visual": "turn-kinematics",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "bicycle:module-09",
        "articleId": "bicycle",
        "moduleId": "module-09",
        "index": 9,
        "title": "Simple Frame",
        "kind": "interactive simulation/diagram module",
        "description": "In the demonstration below, you can guide the rider with the slider , and you can also drag the view around to change the camera angle: Compared to internal combustion engines o...",
        "controlsSummary": "slider/range, drag",
        "responseSummary": "parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "bicycle",
        "visual": "turn-kinematics",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag"
        ]
      },
      {
        "sceneId": "bicycle:module-10",
        "articleId": "bicycle",
        "moduleId": "module-10",
        "index": 10,
        "title": "Bending",
        "kind": "interactive simulation/diagram module",
        "description": "Visualizes frame deformation and stress concentration under load to explain structural limits.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "bicycle",
        "visual": "turn-kinematics",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "bicycle:module-11",
        "articleId": "bicycle",
        "moduleId": "module-11",
        "index": 11,
        "title": "Stresses in the Frame",
        "kind": "interactive simulation/diagram module",
        "description": "Visualizes frame deformation and stress concentration under load to explain structural limits.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "bicycle",
        "visual": "turn-kinematics",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "bicycle:module-12",
        "articleId": "bicycle",
        "moduleId": "module-12",
        "index": 12,
        "title": "Further Reading and Watching",
        "kind": "reference/narrative section",
        "description": "Narrative/reference section in Bicycle that summarizes results and links supporting resources.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "bicycle",
        "visual": "mechanical-train",
        "layout": "note",
        "noteOnly": true,
        "controls": [],
        "defaultPreset": {},
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "bicycle:module-13",
        "articleId": "bicycle",
        "moduleId": "module-13",
        "index": 13,
        "title": "Final Words",
        "kind": "reference/narrative section",
        "description": "Narrative/reference section in Bicycle that summarizes results and links supporting resources.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "bicycle",
        "visual": "turn-kinematics",
        "layout": "note",
        "noteOnly": true,
        "controls": [],
        "defaultPreset": {},
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "bicycle:module-14",
        "articleId": "bicycle",
        "moduleId": "module-14",
        "index": 14,
        "title": "Before we understand these more complicated interactions, we’ll",
        "kind": "interactive simulation/diagram module",
        "description": "Before we understand these more complicated interactions, we’ll play with much simpler objects.",
        "controlsSummary": "play/pause",
        "responseSummary": "time progression can be paused/resumed for frame-by-frame inspection",
        "renderer": "canvas",
        "family": "bicycle",
        "visual": "turn-kinematics",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "pauseGroup": "bicycle-motion",
        "gestures": [
          "play/pause"
        ]
      },
      {
        "sceneId": "bicycle:module-15",
        "articleId": "bicycle",
        "moduleId": "module-15",
        "index": 15,
        "title": "You can use the slider to apply a force to",
        "kind": "interactive simulation/diagram module",
        "description": "In the demonstration below, you can use the slider to apply a force to this box.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "bicycle",
        "visual": "turn-kinematics",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "bicycle:module-16",
        "articleId": "bicycle",
        "moduleId": "module-16",
        "index": 16,
        "title": "Restart the simulation using the button: The red arrow represents",
        "kind": "interactive simulation/diagram module",
        "description": "You can restart the simulation using the button: The red arrow represents the pushing force, which could be applied by a hand, or a strong gust of air.",
        "controlsSummary": "reset/restart",
        "responseSummary": "reset/restart returns simulation to deterministic initial state; vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "bicycle",
        "visual": "turn-kinematics",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "bicycle:module-17",
        "articleId": "bicycle",
        "moduleId": "module-17",
        "index": 17,
        "title": "The size of that arrow reflects the magnitude",
        "kind": "interactive simulation/diagram module",
        "description": "The size of that arrow reflects the magnitude of that force - the bigger the arrow, the stronger the pushing action.",
        "controlsSummary": "implicit controls",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "bicycle",
        "visual": "turn-kinematics",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "bicycle:module-18",
        "articleId": "bicycle",
        "moduleId": "module-18",
        "index": 18,
        "title": "It’s worth pointing out once more that when",
        "kind": "interactive simulation/diagram module",
        "description": "It’s worth pointing out once more that when the box starts to move due to force imbalance, just letting the slider go to balance the two forces again will not stop the box - it ...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "bicycle",
        "visual": "turn-kinematics",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "bicycle:module-19",
        "articleId": "bicycle",
        "moduleId": "module-19",
        "index": 19,
        "title": "I added Earth-like gravity that attracts the cube to the",
        "kind": "interactive simulation/diagram module",
        "description": "In the simulation below, I added Earth-like gravity that attracts the cube to the bottom of your screen.",
        "controlsSummary": "implicit controls",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "bicycle",
        "visual": "turn-kinematics",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "bicycle:module-20",
        "articleId": "bicycle",
        "moduleId": "module-20",
        "index": 20,
        "title": "If we tally up all the small ground",
        "kind": "interactive simulation/diagram module",
        "description": "If we tally up all the small ground forces and moments they create we can replace them with a single arrow centered at the bottom of the cube.",
        "controlsSummary": "implicit controls",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "bicycle",
        "visual": "turn-kinematics",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "bicycle:module-21",
        "articleId": "bicycle",
        "moduleId": "module-21",
        "index": 21,
        "title": "Where the slider controls the time progress of this event",
        "kind": "interactive simulation/diagram module",
        "description": "Let’s see this in a vastly exaggerated form in the demonstration below where the slider controls the time progress of this event: When the rider’s position shifts, the arm lengt...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "bicycle",
        "visual": "turn-kinematics",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "bicycle:module-22",
        "articleId": "bicycle",
        "moduleId": "module-22",
        "index": 22,
        "title": "The slider lets you scrub back and forth",
        "kind": "interactive simulation/diagram module",
        "description": "The slider lets you scrub back and forth in time: In this free-rolling scenario, the inner and outer parts of the tire stay in sync as the wheel smoothly rolls over the road.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "bicycle",
        "visual": "turn-kinematics",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "bicycle:module-23",
        "articleId": "bicycle",
        "moduleId": "module-23",
        "index": 23,
        "title": "Tweak the actual angular velocity of the wheel omega with",
        "kind": "interactive simulation/diagram module",
        "description": "Just like before, you can tweak the actual angular velocity of the wheel omega with the second slider: When the wheel rotates at the free-rolling speed of the current velocity ,...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "bicycle",
        "visual": "turn-kinematics",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "bicycle:module-24",
        "articleId": "bicycle",
        "moduleId": "module-24",
        "index": 24,
        "title": "Control with the slider: When the wheel rotates faster than",
        "kind": "chart/plot module",
        "description": "The plot below roughly demonstrates that dependence of the output force on the slip ratio, and the vertical load , which you can control with the slider: When the wheel rotates ...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes; plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "bicycle",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "bicycle:module-25",
        "articleId": "bicycle",
        "moduleId": "module-25",
        "index": 25,
        "title": "The slider controls the force applied by the rider on",
        "kind": "interactive simulation/diagram module",
        "description": "In the demonstration below, the slider controls the force applied by the rider on the rear brake lever.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "bicycle",
        "visual": "turn-kinematics",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      }
    ]
  },
  {
    "id": "cameras-and-lenses",
    "title": "Cameras and Lenses",
    "author": "Bartosz Ciechanowski",
    "url": "https://ciechanow.ski/cameras-and-lenses/",
    "lead": "Optics explainer covering image formation, aperture, focal length, lens geometry, aberrations, and sensor behavior with manipulable ray simulations.",
    "about": [
      "Optics explainer covering image formation, aperture, focal length, lens geometry, aberrations, and sensor behavior with manipulable ray simulations.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 20,
    "modules": [
      {
        "sceneId": "cameras-and-lenses:module-01",
        "articleId": "cameras-and-lenses",
        "moduleId": "module-01",
        "index": 1,
        "title": "Cameras and Lenses",
        "kind": "interactive simulation/diagram module",
        "description": "Visualizes ray paths through lens elements to explain focus, aperture effects, and optical aberrations.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "cameras-and-lenses",
        "visual": "optics-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "cameras-and-lenses:module-02",
        "articleId": "cameras-and-lenses",
        "moduleId": "module-02",
        "index": 2,
        "title": "Recording Light",
        "kind": "interactive simulation/diagram module",
        "description": "In the simulation below you can witness how light from different directions hits one point on the surface of the sensor: Clearly, to obtain a discernible image we have to limit ...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "cameras-and-lenses",
        "visual": "shadow-volume",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "cameras-and-lenses:module-03",
        "articleId": "cameras-and-lenses",
        "moduleId": "module-03",
        "index": 3,
        "title": "Glass",
        "kind": "interactive simulation/diagram module",
        "description": "You can adjust the thickness of this pane with the gray slider below: When you look at the stick through the surface of a thick glass straight on , everything looks normal.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "cameras-and-lenses",
        "visual": "optics-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "cameras-and-lenses:module-04",
        "articleId": "cameras-and-lenses",
        "moduleId": "module-04",
        "index": 4,
        "title": "Waves",
        "kind": "interactive simulation/diagram module",
        "description": "Waves It’s impossible to talk about wave propagation without involving the time component, so the simulations in this section are animated - you can play and pause them by click...",
        "controlsSummary": "play/pause",
        "responseSummary": "time progression can be paused/resumed for frame-by-frame inspection",
        "renderer": "canvas",
        "family": "cameras-and-lenses",
        "visual": "optics-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "pauseGroup": "cameras-and-lenses-motion",
        "gestures": [
          "play/pause"
        ]
      },
      {
        "sceneId": "cameras-and-lenses:module-05",
        "articleId": "cameras-and-lenses",
        "moduleId": "module-05",
        "index": 5,
        "title": "Manipulating Rays",
        "kind": "interactive simulation/diagram module",
        "description": "You can drag the demo around to see it from different viewpoints: For some reason the rays passing through glass at an angle are deflected off their paths .",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "cameras-and-lenses",
        "visual": "optics-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "cameras-and-lenses:module-06",
        "articleId": "cameras-and-lenses",
        "moduleId": "module-06",
        "index": 6,
        "title": "Aberrations",
        "kind": "interactive simulation/diagram module",
        "description": "Visualizes ray paths through lens elements to explain focus, aperture effects, and optical aberrations.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "cameras-and-lenses",
        "visual": "optics-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "cameras-and-lenses:module-07",
        "articleId": "cameras-and-lenses",
        "moduleId": "module-07",
        "index": 7,
        "title": "Further Watching and Reading",
        "kind": "reference/narrative section",
        "description": "Narrative/reference section in Cameras and Lenses that summarizes results and links supporting resources.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "cameras-and-lenses",
        "visual": "mechanical-train",
        "layout": "note",
        "noteOnly": true,
        "controls": [],
        "defaultPreset": {},
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "cameras-and-lenses:module-08",
        "articleId": "cameras-and-lenses",
        "moduleId": "module-08",
        "index": 8,
        "title": "Final Words",
        "kind": "reference/narrative section",
        "description": "Narrative/reference section in Cameras and Lenses that summarizes results and links supporting resources.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "cameras-and-lenses",
        "visual": "optics-lab",
        "layout": "note",
        "noteOnly": true,
        "controls": [],
        "defaultPreset": {},
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "cameras-and-lenses:module-09",
        "articleId": "cameras-and-lenses",
        "moduleId": "module-09",
        "index": 9,
        "title": "The slider below controls the flow of time:",
        "kind": "interactive simulation/diagram module",
        "description": "The slider below controls the flow of time: The longer the time of collection of photons the more of them are hitting the detectors and the brighter the resulting pixels in the ...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "cameras-and-lenses",
        "visual": "optics-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "cameras-and-lenses:module-10",
        "articleId": "cameras-and-lenses",
        "moduleId": "module-10",
        "index": 10,
        "title": "For the next demo we will also double",
        "kind": "interactive simulation/diagram module",
        "description": "For the next demo we will also double the resolution to an astonishing 1 kilopixel arranged in a 32x32 grid: Note that the individual sensors themselves still only see the inten...",
        "controlsSummary": "implicit controls",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "cameras-and-lenses",
        "visual": "optics-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "cameras-and-lenses:module-11",
        "articleId": "cameras-and-lenses",
        "moduleId": "module-11",
        "index": 11,
        "title": "Drag around the demo to see it from other directions:",
        "kind": "interactive simulation/diagram module",
        "description": "You can drag around the demo to see it from other directions: Let’s try to see what sort of picture would be taken by a sensor that is placed near the objects without any enclos...",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "cameras-and-lenses",
        "visual": "optics-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "cameras-and-lenses:module-12",
        "articleId": "cameras-and-lenses",
        "moduleId": "module-12",
        "index": 12,
        "title": "The first slider controls the diameter of the",
        "kind": "interactive simulation/diagram module",
        "description": "The first slider controls the diameter of the hole, while the second one controls the distance between the opening and the sensor: While not shown here, the inner sides of the w...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "cameras-and-lenses",
        "visual": "optics-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "cameras-and-lenses:module-13",
        "articleId": "cameras-and-lenses",
        "moduleId": "module-13",
        "index": 13,
        "title": "Observe what happens to the taken image as",
        "kind": "interactive simulation/diagram module",
        "description": "Observe what happens to the taken image as we tweak the diameter of the hole with the first slider, or change the distance between the opening and the sensor with the second one...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "cameras-and-lenses",
        "visual": "optics-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "cameras-and-lenses:module-14",
        "articleId": "cameras-and-lenses",
        "moduleId": "module-14",
        "index": 14,
        "title": "The red slider controls the position of the",
        "kind": "interactive simulation/diagram module",
        "description": "The red slider controls the position of the source and the gray slider controls the thickness.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "cameras-and-lenses",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "cameras-and-lenses:module-15",
        "articleId": "cameras-and-lenses",
        "moduleId": "module-15",
        "index": 15,
        "title": "Globally pause all the following demonstrations",
        "kind": "interactive simulation/diagram module",
        "description": "By default all animations are enabled, but if you find them distracting, or if you want to save power, you can globally pause all the following demonstrations.",
        "controlsSummary": "play/pause",
        "responseSummary": "time progression can be paused/resumed for frame-by-frame inspection",
        "renderer": "canvas",
        "family": "cameras-and-lenses",
        "visual": "optics-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "pauseGroup": "cameras-and-lenses-motion",
        "gestures": [
          "play/pause"
        ]
      },
      {
        "sceneId": "cameras-and-lenses:module-16",
        "articleId": "cameras-and-lenses",
        "moduleId": "module-16",
        "index": 16,
        "title": "In the simulation above notice the difference in",
        "kind": "interactive simulation/diagram module",
        "description": "In the simulation above notice the difference in sharpness between the red and green spheres.",
        "controlsSummary": "implicit controls",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "cameras-and-lenses",
        "visual": "optics-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "cameras-and-lenses:module-17",
        "articleId": "cameras-and-lenses",
        "moduleId": "module-17",
        "index": 17,
        "title": "The black slider controls the aperture, the blue",
        "kind": "interactive simulation/diagram module",
        "description": "The black slider controls the aperture, the blue slider controls the focal length, and the red slider changes the position of the object relative to the camera.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "cameras-and-lenses",
        "visual": "optics-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "cameras-and-lenses:module-18",
        "articleId": "cameras-and-lenses",
        "moduleId": "module-18",
        "index": 18,
        "title": "Make the sides non-parallel by using the slider: What we",
        "kind": "interactive simulation/diagram module",
        "description": "You can make the sides non-parallel by using the slider: What we perceive as white light is a combination of lights of different wavelengths.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "cameras-and-lenses",
        "visual": "optics-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "cameras-and-lenses:module-19",
        "articleId": "cameras-and-lenses",
        "moduleId": "module-19",
        "index": 19,
        "title": "Control the amount of dispersion the lens material introduces: Chromatic",
        "kind": "interactive simulation/diagram module",
        "description": "Using the slider you can control the amount of dispersion the lens material introduces: Chromatic aberration may be corrected with an achromatic lens , usually in the form of a ...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "cameras-and-lenses",
        "visual": "optics-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "cameras-and-lenses:module-20",
        "articleId": "cameras-and-lenses",
        "moduleId": "module-20",
        "index": 20,
        "title": "The simple act of pressing the shutter button",
        "kind": "interactive simulation/diagram module",
        "description": "The simple act of pressing the shutter button in a camera app on a smartphone or on the body of a high-end DSLR is effortless, but it's at this moment when, through carefully gu...",
        "controlsSummary": "implicit controls",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "cameras-and-lenses",
        "visual": "optics-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      }
    ]
  },
  {
    "id": "color-spaces",
    "title": "Color Spaces",
    "author": "Bartosz Ciechanowski",
    "url": "https://ciechanow.ski/color-spaces/",
    "lead": "Color science explainer spanning RGB spaces, chromaticity, transfer curves, gamut boundaries, and matrix conversions with interactive plots.",
    "about": [
      "Color science explainer spanning RGB spaces, chromaticity, transfer curves, gamut boundaries, and matrix conversions with interactive plots.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 25,
    "modules": [
      {
        "sceneId": "color-spaces:module-01",
        "articleId": "color-spaces",
        "moduleId": "module-01",
        "index": 1,
        "title": "Color Spaces",
        "kind": "interactive simulation/diagram module",
        "description": "We can finally present the chromaticities of primaries of both R G B and R G B color spaces in a single graph: Comparison of primaries I’ll discuss the meaning of the little cro...",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "canvas",
        "family": "color-spaces",
        "visual": "chromaticity",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "red",
            "label": "red/input",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "range",
            "id": "green",
            "label": "green/gamma",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.42
          },
          {
            "kind": "range",
            "id": "blue",
            "label": "blue/detail",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.68
          },
          {
            "kind": "choice",
            "id": "space",
            "label": "space",
            "value": "sRGB",
            "options": [
              "sRGB",
              "Display P3",
              "XYZ"
            ]
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset palette"
          }
        ],
        "defaultPreset": {
          "red": 0.55,
          "green": 0.42,
          "blue": 0.68,
          "space": "sRGB"
        },
        "sharedGroup": "color-spaces-core",
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "color-spaces:module-02",
        "articleId": "color-spaces",
        "moduleId": "module-02",
        "index": 2,
        "title": "Color Pickers",
        "kind": "interactive simulation/diagram module",
        "description": "We can compare some of the colors for the same slider positions side by side.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "color-spaces",
        "visual": "chromaticity",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "red",
            "label": "red/input",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "range",
            "id": "green",
            "label": "green/gamma",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.42
          },
          {
            "kind": "range",
            "id": "blue",
            "label": "blue/detail",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.68
          },
          {
            "kind": "choice",
            "id": "space",
            "label": "space",
            "value": "sRGB",
            "options": [
              "sRGB",
              "Display P3",
              "XYZ"
            ]
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset palette"
          }
        ],
        "defaultPreset": {
          "red": 0.55,
          "green": 0.42,
          "blue": 0.68,
          "space": "sRGB"
        },
        "sharedGroup": "color-spaces-core",
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "color-spaces:module-03",
        "articleId": "color-spaces",
        "moduleId": "module-03",
        "index": 3,
        "title": "Normalized Range",
        "kind": "interactive simulation/diagram module",
        "description": "The encoded value is on the horizontal axis and it’s symbolized with a binary code: Tone response curve of sRGB While the curve may look like a single power function, in the ran...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes; plots and numeric readouts recalculate with current parameters",
        "renderer": "canvas",
        "family": "color-spaces",
        "visual": "chromaticity",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "red",
            "label": "red/input",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "range",
            "id": "green",
            "label": "green/gamma",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.42
          },
          {
            "kind": "range",
            "id": "blue",
            "label": "blue/detail",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.68
          },
          {
            "kind": "choice",
            "id": "space",
            "label": "space",
            "value": "sRGB",
            "options": [
              "sRGB",
              "Display P3",
              "XYZ"
            ]
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset palette"
          }
        ],
        "defaultPreset": {
          "red": 0.55,
          "green": 0.42,
          "blue": 0.68,
          "space": "sRGB"
        },
        "sharedGroup": "color-spaces-core",
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "color-spaces:module-04",
        "articleId": "color-spaces",
        "moduleId": "module-04",
        "index": 4,
        "title": "Intensity Mismatch",
        "kind": "interactive simulation/diagram module",
        "description": "Here’s a comparison of some of the colors for different slider values: A color space can specify how the numeric values of the red, green, and blue components map to intensity o...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "color-spaces",
        "visual": "transfer-curve",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "red",
            "label": "red/input",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "range",
            "id": "green",
            "label": "green/gamma",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.42
          },
          {
            "kind": "range",
            "id": "blue",
            "label": "blue/detail",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.68
          },
          {
            "kind": "choice",
            "id": "space",
            "label": "space",
            "value": "sRGB",
            "options": [
              "sRGB",
              "Display P3",
              "XYZ"
            ]
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset palette"
          }
        ],
        "defaultPreset": {
          "red": 0.55,
          "green": 0.42,
          "blue": 0.68,
          "space": "sRGB"
        },
        "sharedGroup": "color-spaces-core",
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "color-spaces:module-05",
        "articleId": "color-spaces",
        "moduleId": "module-05",
        "index": 5,
        "title": "Primary Differences",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Primary Differences within Color Spaces using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "color-spaces",
        "visual": "chromaticity",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "red",
            "label": "red/input",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "range",
            "id": "green",
            "label": "green/gamma",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.42
          },
          {
            "kind": "range",
            "id": "blue",
            "label": "blue/detail",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.68
          },
          {
            "kind": "choice",
            "id": "space",
            "label": "space",
            "value": "sRGB",
            "options": [
              "sRGB",
              "Display P3",
              "XYZ"
            ]
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset palette"
          }
        ],
        "defaultPreset": {
          "red": 0.55,
          "green": 0.42,
          "blue": 0.68,
          "space": "sRGB"
        },
        "sharedGroup": "color-spaces-core",
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "color-spaces:module-06",
        "articleId": "color-spaces",
        "moduleId": "module-06",
        "index": 6,
        "title": "Primaries Matched",
        "kind": "interactive simulation/diagram module",
        "description": "We can finally present the chromaticities of primaries of both R G B and R G B color spaces in a single graph: Comparison of primaries I’ll discuss the meaning of the little cro...",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "canvas",
        "family": "color-spaces",
        "visual": "chromaticity",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "red",
            "label": "red/input",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "range",
            "id": "green",
            "label": "green/gamma",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.42
          },
          {
            "kind": "range",
            "id": "blue",
            "label": "blue/detail",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.68
          },
          {
            "kind": "choice",
            "id": "space",
            "label": "space",
            "value": "sRGB",
            "options": [
              "sRGB",
              "Display P3",
              "XYZ"
            ]
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset palette"
          }
        ],
        "defaultPreset": {
          "red": 0.55,
          "green": 0.42,
          "blue": 0.68,
          "space": "sRGB"
        },
        "sharedGroup": "color-spaces-core",
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "color-spaces:module-07",
        "articleId": "color-spaces",
        "moduleId": "module-07",
        "index": 7,
        "title": "Mixing Things Up",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Mixing Things Up within Color Spaces using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "color-spaces",
        "visual": "chromaticity",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "red",
            "label": "red/input",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "range",
            "id": "green",
            "label": "green/gamma",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.42
          },
          {
            "kind": "range",
            "id": "blue",
            "label": "blue/detail",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.68
          },
          {
            "kind": "choice",
            "id": "space",
            "label": "space",
            "value": "sRGB",
            "options": [
              "sRGB",
              "Display P3",
              "XYZ"
            ]
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset palette"
          }
        ],
        "defaultPreset": {
          "red": 0.55,
          "green": 0.42,
          "blue": 0.68,
          "space": "sRGB"
        },
        "sharedGroup": "color-spaces-core",
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "color-spaces:module-08",
        "articleId": "color-spaces",
        "moduleId": "module-08",
        "index": 8,
        "title": "Seeing the Matrix",
        "kind": "chart/plot module",
        "description": "Shows color-space mapping and conversion behavior, linking numeric channels to visible gamut changes.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "svg",
        "family": "color-spaces",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "color-spaces:module-09",
        "articleId": "color-spaces",
        "moduleId": "module-09",
        "index": 9,
        "title": "There and Back Again",
        "kind": "interactive simulation/diagram module",
        "description": "Explains There and Back Again within Color Spaces using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "color-spaces",
        "visual": "chromaticity",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "red",
            "label": "red/input",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "range",
            "id": "green",
            "label": "green/gamma",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.42
          },
          {
            "kind": "range",
            "id": "blue",
            "label": "blue/detail",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.68
          },
          {
            "kind": "choice",
            "id": "space",
            "label": "space",
            "value": "sRGB",
            "options": [
              "sRGB",
              "Display P3",
              "XYZ"
            ]
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset palette"
          }
        ],
        "defaultPreset": {
          "red": 0.55,
          "green": 0.42,
          "blue": 0.68,
          "space": "sRGB"
        },
        "sharedGroup": "color-spaces-core",
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "color-spaces:module-10",
        "articleId": "color-spaces",
        "moduleId": "module-10",
        "index": 10,
        "title": "Negative Values",
        "kind": "interactive simulation/diagram module",
        "description": "The results of the experiments were standardized as rgb color matching functions that can be presented on a graph: CIE rgb color matching functions Notice the presence of negati...",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "canvas",
        "family": "color-spaces",
        "visual": "chromaticity",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "red",
            "label": "red/input",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "range",
            "id": "green",
            "label": "green/gamma",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.42
          },
          {
            "kind": "range",
            "id": "blue",
            "label": "blue/detail",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.68
          },
          {
            "kind": "choice",
            "id": "space",
            "label": "space",
            "value": "sRGB",
            "options": [
              "sRGB",
              "Display P3",
              "XYZ"
            ]
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset palette"
          }
        ],
        "defaultPreset": {
          "red": 0.55,
          "green": 0.42,
          "blue": 0.68,
          "space": "sRGB"
        },
        "sharedGroup": "color-spaces-core",
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "color-spaces:module-11",
        "articleId": "color-spaces",
        "moduleId": "module-11",
        "index": 11,
        "title": "The Matrix Seeing",
        "kind": "chart/plot module",
        "description": "Shows color-space mapping and conversion behavior, linking numeric channels to visible gamut changes.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "svg",
        "family": "color-spaces",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "color-spaces:module-12",
        "articleId": "color-spaces",
        "moduleId": "module-12",
        "index": 12,
        "title": "Breaking the Boundaries",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Breaking the Boundaries within Color Spaces using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "color-spaces",
        "visual": "chromaticity",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "red",
            "label": "red/input",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "range",
            "id": "green",
            "label": "green/gamma",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.42
          },
          {
            "kind": "range",
            "id": "blue",
            "label": "blue/detail",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.68
          },
          {
            "kind": "choice",
            "id": "space",
            "label": "space",
            "value": "sRGB",
            "options": [
              "sRGB",
              "Display P3",
              "XYZ"
            ]
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset palette"
          }
        ],
        "defaultPreset": {
          "red": 0.55,
          "green": 0.42,
          "blue": 0.68,
          "space": "sRGB"
        },
        "sharedGroup": "color-spaces-core",
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "color-spaces:module-13",
        "articleId": "color-spaces",
        "moduleId": "module-13",
        "index": 13,
        "title": "Try using the one below: The gist of",
        "kind": "interactive simulation/diagram module",
        "description": "Try using the one below: The gist of the behavior of that new picker is the same - the red slider controls the red component, the green slider affects the green component, and t...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "color-spaces",
        "visual": "chromaticity",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "red",
            "label": "red/input",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "range",
            "id": "green",
            "label": "green/gamma",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.42
          },
          {
            "kind": "range",
            "id": "blue",
            "label": "blue/detail",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.68
          },
          {
            "kind": "choice",
            "id": "space",
            "label": "space",
            "value": "sRGB",
            "options": [
              "sRGB",
              "Display P3",
              "XYZ"
            ]
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset palette"
          }
        ],
        "defaultPreset": {
          "red": 0.55,
          "green": 0.42,
          "blue": 0.68,
          "space": "sRGB"
        },
        "sharedGroup": "color-spaces-core",
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "color-spaces:module-14",
        "articleId": "color-spaces",
        "moduleId": "module-14",
        "index": 14,
        "title": "In other words, the position of a slider",
        "kind": "interactive simulation/diagram module",
        "description": "In other words, the position of a slider may not be equal to intensity of the light the slider controls.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "color-spaces",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "color-spaces:module-15",
        "articleId": "color-spaces",
        "moduleId": "module-15",
        "index": 15,
        "title": "Drag the cubes around to see them from different angles",
        "kind": "interactive simulation/diagram module",
        "description": "You can drag the cubes around to see them from different angles and control the R G B color indicator using the sliders: As an experiment I encourage you to set red and green co...",
        "controlsSummary": "slider/range, drag, play/pause",
        "responseSummary": "parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly; time progression can be paused/resumed...",
        "renderer": "canvas",
        "family": "color-spaces",
        "visual": "rgb-cube",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "red",
            "label": "red/input",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "range",
            "id": "green",
            "label": "green/gamma",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.42
          },
          {
            "kind": "range",
            "id": "blue",
            "label": "blue/detail",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.68
          },
          {
            "kind": "choice",
            "id": "space",
            "label": "space",
            "value": "sRGB",
            "options": [
              "sRGB",
              "Display P3",
              "XYZ"
            ]
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset palette"
          },
          {
            "kind": "action",
            "id": "pause-toggle",
            "label": "pause motion"
          }
        ],
        "defaultPreset": {
          "red": 0.55,
          "green": 0.42,
          "blue": 0.68,
          "space": "sRGB"
        },
        "sharedGroup": "color-spaces-core",
        "pauseGroup": "color-spaces-motion",
        "gestures": [
          "slider/range",
          "drag",
          "play/pause"
        ]
      },
      {
        "sceneId": "color-spaces:module-16",
        "articleId": "color-spaces",
        "moduleId": "module-16",
        "index": 16,
        "title": "Reading from the color matching plot we can",
        "kind": "chart/plot module",
        "description": "Reading from the color matching plot we can tell that the color match required 0.16768 units of R , 0.17087 units of G and -0.00135 units of B .",
        "controlsSummary": "implicit controls",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "color-spaces",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": []
      },
      {
        "sceneId": "color-spaces:module-17",
        "articleId": "color-spaces",
        "moduleId": "module-17",
        "index": 17,
        "title": "If we read the color matching value for",
        "kind": "chart/plot module",
        "description": "If we read the color matching value for every wavelength we obtain the following plot: You may wonder why the spectrum curve doesn’t go through the pure red, green, or blue endp...",
        "controlsSummary": "implicit controls",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "color-spaces",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": []
      },
      {
        "sceneId": "color-spaces:module-18",
        "articleId": "color-spaces",
        "moduleId": "module-18",
        "index": 18,
        "title": "xy Chromaticity Diagram Three dimensional diagrams are fun",
        "kind": "chart/plot module",
        "description": "xy Chromaticity Diagram Three dimensional diagrams are fun to play with, but they’re often not particularly practical - a 2D plot is often easier to work with and reason about.",
        "controlsSummary": "play/pause",
        "responseSummary": "time progression can be paused/resumed for frame-by-frame inspection; plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "color-spaces",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "pauseGroup": "color-spaces-motion",
        "gestures": [
          "play/pause"
        ]
      },
      {
        "sceneId": "color-spaces:module-19",
        "articleId": "color-spaces",
        "moduleId": "module-19",
        "index": 19,
        "title": "Rejection of z is equivalent to a flat",
        "kind": "chart/plot module",
        "description": "Rejection of z is equivalent to a flat projection onto xy plane: If we repeat that step for every combination of spectral colors we can finally present the 2D plot known as CIE ...",
        "controlsSummary": "implicit controls",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "color-spaces",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": []
      },
      {
        "sceneId": "color-spaces:module-20",
        "articleId": "color-spaces",
        "moduleId": "module-20",
        "index": 20,
        "title": "The colors on the inside of the plot",
        "kind": "chart/plot module",
        "description": "The colors on the inside of the plot are just some combinations of the spectral colors and the colors outside of the plot don’t exist .",
        "controlsSummary": "implicit controls",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "color-spaces",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": []
      },
      {
        "sceneId": "color-spaces:module-21",
        "articleId": "color-spaces",
        "moduleId": "module-21",
        "index": 21,
        "title": "In some areas of the plot one has",
        "kind": "chart/plot module",
        "description": "In some areas of the plot one has to move relatively far away from a chosen color to notice the difference in chromaticity, while in some other areas the distance to change is m...",
        "controlsSummary": "implicit controls",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "color-spaces",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": []
      },
      {
        "sceneId": "color-spaces:module-22",
        "articleId": "color-spaces",
        "moduleId": "module-22",
        "index": 22,
        "title": "You can drag the slider to see how the extent",
        "kind": "interactive simulation/diagram module",
        "description": "In the simulation below you can drag the slider to see how the extent of the chromaticity triangle corresponds to the representable colors.",
        "controlsSummary": "slider/range, drag",
        "responseSummary": "parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "color-spaces",
        "visual": "chromaticity",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "red",
            "label": "red/input",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "range",
            "id": "green",
            "label": "green/gamma",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.42
          },
          {
            "kind": "range",
            "id": "blue",
            "label": "blue/detail",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.68
          },
          {
            "kind": "choice",
            "id": "space",
            "label": "space",
            "value": "sRGB",
            "options": [
              "sRGB",
              "Display P3",
              "XYZ"
            ]
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset palette"
          }
        ],
        "defaultPreset": {
          "red": 0.55,
          "green": 0.42,
          "blue": 0.68,
          "space": "sRGB"
        },
        "sharedGroup": "color-spaces-core",
        "gestures": [
          "slider/range",
          "drag"
        ]
      },
      {
        "sceneId": "color-spaces:module-23",
        "articleId": "color-spaces",
        "moduleId": "module-23",
        "index": 23,
        "title": "Click tap the image to change it: Your browser doesn't",
        "kind": "interactive simulation/diagram module",
        "description": "You can click tap the image to change it: Your browser doesn't support WebGL which is required for this demo.",
        "controlsSummary": "click/tap",
        "responseSummary": "click actions trigger state transitions or object selection",
        "renderer": "canvas",
        "family": "color-spaces",
        "visual": "click-ratchet",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "gestures": [
          "click/tap"
        ]
      },
      {
        "sceneId": "color-spaces:module-24",
        "articleId": "color-spaces",
        "moduleId": "module-24",
        "index": 24,
        "title": "See what happens when you drag all the",
        "kind": "interactive simulation/diagram module",
        "description": "See what happens when you drag all the sliders to the right : The color space form the bottom half defines its white as a slightly different color than the top color space.",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "color-spaces",
        "visual": "chromaticity",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "red",
            "label": "red/input",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "range",
            "id": "green",
            "label": "green/gamma",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.42
          },
          {
            "kind": "range",
            "id": "blue",
            "label": "blue/detail",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.68
          },
          {
            "kind": "choice",
            "id": "space",
            "label": "space",
            "value": "sRGB",
            "options": [
              "sRGB",
              "Display P3",
              "XYZ"
            ]
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset palette"
          }
        ],
        "defaultPreset": {
          "red": 0.55,
          "green": 0.42,
          "blue": 0.68,
          "space": "sRGB"
        },
        "sharedGroup": "color-spaces-core",
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "color-spaces:module-25",
        "articleId": "color-spaces",
        "moduleId": "module-25",
        "index": 25,
        "title": "Tone Response Curve Let’s look at the plot",
        "kind": "chart/plot module",
        "description": "Tone Response Curve Let’s look at the plot of the tone response curve of the sRGB color space.",
        "controlsSummary": "implicit controls",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "color-spaces",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": []
      }
    ]
  },
  {
    "id": "curves-and-surfaces",
    "title": "Curves and Surfaces",
    "author": "Bartosz Ciechanowski",
    "url": "https://ciechanow.ski/curves-and-surfaces/",
    "lead": "Geometric modeling deep dive from linear interpolation to bezier patches, splines, and subdivision surfaces with draggable control points.",
    "about": [
      "Geometric modeling deep dive from linear interpolation to bezier patches, splines, and subdivision surfaces with draggable control points.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 25,
    "modules": [
      {
        "sceneId": "curves-and-surfaces:module-01",
        "articleId": "curves-and-surfaces",
        "moduleId": "module-01",
        "index": 1,
        "title": "Curves and Surfaces",
        "kind": "chart/plot module",
        "description": "Over the course of this blog post I’ll explain how this model of a mask can be very smooth despite being described by a limited number of small points that you can drag around t...",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "svg",
        "family": "curves-and-surfaces",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "curves-and-surfaces:module-02",
        "articleId": "curves-and-surfaces",
        "moduleId": "module-02",
        "index": 2,
        "title": "Defining the Shape",
        "kind": "interactive simulation/diagram module",
        "description": "Over the course of this blog post I’ll explain how this model of a mask can be very smooth despite being described by a limited number of small points that you can drag around t...",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "curves-and-surfaces",
        "visual": "curve-surface",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "curves-and-surfaces:module-03",
        "articleId": "curves-and-surfaces",
        "moduleId": "module-03",
        "index": 3,
        "title": "Linear Segment",
        "kind": "interactive simulation/diagram module",
        "description": "Linear Segment In the demonstration below you can drag the control points A and B around to change their position.",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "curves-and-surfaces",
        "visual": "curve-surface",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "curves-and-surfaces:module-04",
        "articleId": "curves-and-surfaces",
        "moduleId": "module-04",
        "index": 4,
        "title": "A Step Further",
        "kind": "reference/narrative section",
        "description": "The slider controls the progress of our drawing - the more advanced the slider is the further into drawing we are.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "curves-and-surfaces",
        "visual": "curve-surface",
        "layout": "note",
        "noteOnly": true,
        "controls": [],
        "defaultPreset": {},
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "curves-and-surfaces:module-05",
        "articleId": "curves-and-surfaces",
        "moduleId": "module-05",
        "index": 5,
        "title": "Bezier Patches",
        "kind": "interactive simulation/diagram module",
        "description": "When you move the selected 6 th point, the section of the curve near the 2 nd control point changes as well: When we look at the plot of the weight that each point has as we pro...",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "canvas",
        "family": "curves-and-surfaces",
        "visual": "curve-surface",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "curves-and-surfaces:module-06",
        "articleId": "curves-and-surfaces",
        "moduleId": "module-06",
        "index": 6,
        "title": "Beyond Cubic",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Beyond Cubic within Curves and Surfaces using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "curves-and-surfaces",
        "visual": "curve-surface",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "curves-and-surfaces:module-07",
        "articleId": "curves-and-surfaces",
        "moduleId": "module-07",
        "index": 7,
        "title": "Splines",
        "kind": "interactive simulation/diagram module",
        "description": "Uses control-point manipulation to show how parametric curves/surfaces change shape and continuity.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "curves-and-surfaces",
        "visual": "curve-surface",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "curves-and-surfaces:module-08",
        "articleId": "curves-and-surfaces",
        "moduleId": "module-08",
        "index": 8,
        "title": "Curved Mirror on The Wall",
        "kind": "chart/plot module",
        "description": "By dragging the slider you can bend that surface into an arc of a circle, the black curve below shows a cross section of the mirror’s shape: Notice that as the mirror pulls away...",
        "controlsSummary": "slider/range, drag",
        "responseSummary": "parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly; vector arrows refresh to reflect direc...",
        "renderer": "svg",
        "family": "curves-and-surfaces",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": [
          "slider/range",
          "drag"
        ]
      },
      {
        "sceneId": "curves-and-surfaces:module-09",
        "articleId": "curves-and-surfaces",
        "moduleId": "module-09",
        "index": 9,
        "title": "Building the Basis",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Building the Basis within Curves and Surfaces using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "curves-and-surfaces",
        "visual": "curve-surface",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "curves-and-surfaces:module-10",
        "articleId": "curves-and-surfaces",
        "moduleId": "module-10",
        "index": 10,
        "title": "Bâspline Extravaganza",
        "kind": "interactive simulation/diagram module",
        "description": "Uses control-point manipulation to show how parametric curves/surfaces change shape and continuity.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "curves-and-surfaces",
        "visual": "curve-surface",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "curves-and-surfaces:module-11",
        "articleId": "curves-and-surfaces",
        "moduleId": "module-11",
        "index": 11,
        "title": "Cutting Corners",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Cutting Corners within Curves and Surfaces using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "curves-and-surfaces",
        "visual": "curve-surface",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "curves-and-surfaces:module-12",
        "articleId": "curves-and-surfaces",
        "moduleId": "module-12",
        "index": 12,
        "title": "Subdivision Surfaces",
        "kind": "interactive simulation/diagram module",
        "description": "Over the course of this blog post I’ll explain how this model of a mask can be very smooth despite being described by a limited number of small points that you can drag around t...",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "curves-and-surfaces",
        "visual": "curve-surface",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "curves-and-surfaces:module-13",
        "articleId": "curves-and-surfaces",
        "moduleId": "module-13",
        "index": 13,
        "title": "I built a system that lets you change the shape",
        "kind": "chart/plot module",
        "description": "In the demonstration below I built a system that lets you change the shape of a curve by controlling its spiralâness and size : While fun to play with, this system is quite im...",
        "controlsSummary": "play/pause",
        "responseSummary": "time progression can be paused/resumed for frame-by-frame inspection",
        "renderer": "svg",
        "family": "curves-and-surfaces",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "pauseGroup": "curves-and-surfaces-motion",
        "gestures": [
          "play/pause"
        ]
      },
      {
        "sceneId": "curves-and-surfaces:module-14",
        "articleId": "curves-and-surfaces",
        "moduleId": "module-14",
        "index": 14,
        "title": "You can drag each control point shown as to change",
        "kind": "chart/plot module",
        "description": "In the demonstration below you can drag each control point shown as to change the curve’s form: Control points are often visualized with connecting lines that join them to their...",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "svg",
        "family": "curves-and-surfaces",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "curves-and-surfaces:module-15",
        "articleId": "curves-and-surfaces",
        "moduleId": "module-15",
        "index": 15,
        "title": "You can tap click a control point to see how",
        "kind": "chart/plot module",
        "description": "In the demonstration below you can tap click a control point to see how it affects the local shape - the redder the section of the curve the more influenced it is by that contro...",
        "controlsSummary": "click/tap",
        "responseSummary": "click actions trigger state transitions or object selection",
        "renderer": "svg",
        "family": "curves-and-surfaces",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": [
          "click/tap"
        ]
      },
      {
        "sceneId": "curves-and-surfaces:module-16",
        "articleId": "curves-and-surfaces",
        "moduleId": "module-16",
        "index": 16,
        "title": "The slider controls a virtual red pen that",
        "kind": "interactive simulation/diagram module",
        "description": "The slider controls a virtual red pen that is used to draw a segment between those two points: While this demo is the world’s most primitive drawing application, there are some ...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "curves-and-surfaces",
        "visual": "curve-surface",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "curves-and-surfaces:module-17",
        "articleId": "curves-and-surfaces",
        "moduleId": "module-17",
        "index": 17,
        "title": "Tap click the control points to change which one is",
        "kind": "interactive simulation/diagram module",
        "description": "You can tap click the control points to change which one is selected: For a linear segment like that, weighting function is quite straightforward.",
        "controlsSummary": "click/tap",
        "responseSummary": "click actions trigger state transitions or object selection",
        "renderer": "canvas",
        "family": "curves-and-surfaces",
        "visual": "click-ratchet",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "gestures": [
          "click/tap"
        ]
      },
      {
        "sceneId": "curves-and-surfaces:module-18",
        "articleId": "curves-and-surfaces",
        "moduleId": "module-18",
        "index": 18,
        "title": "As we progress through the curve using the",
        "kind": "chart/plot module",
        "description": "As we progress through the curve using the slider we decrease the weight of the point A and increase the weight of the point B : This hopefully makes intuitive sense.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "svg",
        "family": "curves-and-surfaces",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "curves-and-surfaces:module-19",
        "articleId": "curves-and-surfaces",
        "moduleId": "module-19",
        "index": 19,
        "title": "The slider controls a virtual pen that paints",
        "kind": "interactive simulation/diagram module",
        "description": "The slider controls a virtual pen that paints a linear segment : By dragging that point through space we’ve created a simple linear segment placed in three dimensions.",
        "controlsSummary": "slider/range, drag",
        "responseSummary": "parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "curves-and-surfaces",
        "visual": "curve-surface",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag"
        ]
      },
      {
        "sceneId": "curves-and-surfaces:module-20",
        "articleId": "curves-and-surfaces",
        "moduleId": "module-20",
        "index": 20,
        "title": "Let’s not forget that the segment we’re dragging",
        "kind": "interactive simulation/diagram module",
        "description": "Let’s not forget that the segment we’re dragging is itself made by dragging a point between the segment’s endpoints, so the entire surface consists of points made from all possi...",
        "controlsSummary": "slider/range, drag",
        "responseSummary": "parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "curves-and-surfaces",
        "visual": "curve-surface",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag"
        ]
      },
      {
        "sceneId": "curves-and-surfaces:module-21",
        "articleId": "curves-and-surfaces",
        "moduleId": "module-21",
        "index": 21,
        "title": "As a result, we can create the very",
        "kind": "interactive simulation/diagram module",
        "description": "As a result, we can create the very same surface by choosing to drag either the yellow or the blue segment through space - they both end up tracing the same surface: While we’re...",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "curves-and-surfaces",
        "visual": "curve-surface",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "curves-and-surfaces:module-22",
        "articleId": "curves-and-surfaces",
        "moduleId": "module-22",
        "index": 22,
        "title": "Tap click a control point to select it: There are",
        "kind": "chart/plot module",
        "description": "You can tap click a control point to select it: There are a few interesting observations to be made here: When the progress is equal to 0 the weight function of control point A ...",
        "controlsSummary": "click/tap",
        "responseSummary": "click actions trigger state transitions or object selection",
        "renderer": "svg",
        "family": "curves-and-surfaces",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": [
          "click/tap"
        ]
      },
      {
        "sceneId": "curves-and-surfaces:module-23",
        "articleId": "curves-and-surfaces",
        "moduleId": "module-23",
        "index": 23,
        "title": "We can visualize how uniform steps of progress",
        "kind": "chart/plot module",
        "description": "We can visualize how uniform steps of progress map to the curve points: For some configurations when the slider is halfway along the progress, the curve is definitely not halfwa...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "svg",
        "family": "curves-and-surfaces",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "curves-and-surfaces:module-24",
        "articleId": "curves-and-surfaces",
        "moduleId": "module-24",
        "index": 24,
        "title": "That plane also has a perpendicular direction which",
        "kind": "interactive simulation/diagram module",
        "description": "That plane also has a perpendicular direction which we call a normal direction of the surface at that point - I’ve marked that direction with a red arrow : For two surfaces to b...",
        "controlsSummary": "implicit controls",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "curves-and-surfaces",
        "visual": "curve-surface",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "curves-and-surfaces:module-25",
        "articleId": "curves-and-surfaces",
        "moduleId": "module-25",
        "index": 25,
        "title": "Witness how quickly the local direction of the curve, shown",
        "kind": "chart/plot module",
        "description": "By dragging the slider you can witness how quickly the local direction of the curve, shown as a black arrow , changes in the areas of large curvature: A straight line has no cur...",
        "controlsSummary": "slider/range, drag",
        "responseSummary": "parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly; vector arrows refresh to reflect direc...",
        "renderer": "svg",
        "family": "curves-and-surfaces",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": [
          "slider/range",
          "drag"
        ]
      }
    ]
  },
  {
    "id": "earth-and-sun",
    "title": "Earth and Sun",
    "author": "Bartosz Ciechanowski",
    "url": "https://ciechanow.ski/earth-and-sun/",
    "lead": "Astronomy and orbital-mechanics explanation for seasons, axial tilt, orbital geometry, and timekeeping relationships between Earth and Sun.",
    "about": [
      "Astronomy and orbital-mechanics explanation for seasons, axial tilt, orbital geometry, and timekeeping relationships between Earth and Sun.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 17,
    "modules": [
      {
        "sceneId": "earth-and-sun:module-01",
        "articleId": "earth-and-sun",
        "moduleId": "module-01",
        "index": 1,
        "title": "Earth and Sun",
        "kind": "interactive simulation/diagram module",
        "description": "You can drag the globe around to see it from different perspectives and use the sliders to change the date and time: It’s hard to talk about Earth and Sun without referencing a ...",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "earth-and-sun",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "earth-and-sun:module-02",
        "articleId": "earth-and-sun",
        "moduleId": "module-02",
        "index": 2,
        "title": "Size",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Size within Earth and Sun using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "earth-and-sun",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "earth-and-sun:module-03",
        "articleId": "earth-and-sun",
        "moduleId": "module-03",
        "index": 3,
        "title": "Ellipse",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Ellipse within Earth and Sun using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "earth-and-sun",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "earth-and-sun:module-04",
        "articleId": "earth-and-sun",
        "moduleId": "module-04",
        "index": 4,
        "title": "Orbit",
        "kind": "interactive simulation/diagram module",
        "description": "As Kepler has discovered, traversal of each of the arc of the pie-slice sections of the orbit takes the same amount of time: At the bottom part of the simulation you can see the...",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "earth-and-sun",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "earth-and-sun:module-05",
        "articleId": "earth-and-sun",
        "moduleId": "module-05",
        "index": 5,
        "title": "Second Law of Kepler",
        "kind": "interactive simulation/diagram module",
        "description": "As Kepler has discovered, traversal of each of the arc of the pie-slice sections of the orbit takes the same amount of time: At the bottom part of the simulation you can see the...",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "earth-and-sun",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "earth-and-sun:module-06",
        "articleId": "earth-and-sun",
        "moduleId": "module-06",
        "index": 6,
        "title": "Orbital Plane",
        "kind": "interactive simulation/diagram module",
        "description": "You may drag over the demonstration up and down to change the viewing angle: In fact, all planets in the Solar System have very similar orbital planes which is a consequence of ...",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "earth-and-sun",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "earth-and-sun:module-07",
        "articleId": "earth-and-sun",
        "moduleId": "module-07",
        "index": 7,
        "title": "Axial Rotation",
        "kind": "interactive simulation/diagram module",
        "description": "If you look closely at the simulation of the sidereal and solar day you’ll notice that we didn’t account for two important factors - eccentricity of the orbit and the axial tilt...",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "earth-and-sun",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "earth-and-sun:module-08",
        "articleId": "earth-and-sun",
        "moduleId": "module-08",
        "index": 8,
        "title": "Axial Tilt",
        "kind": "interactive simulation/diagram module",
        "description": "If you look closely at the simulation of the sidereal and solar day you’ll notice that we didn’t account for two important factors - eccentricity of the orbit and the axial tilt...",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "earth-and-sun",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "earth-and-sun:module-09",
        "articleId": "earth-and-sun",
        "moduleId": "module-09",
        "index": 9,
        "title": "Year",
        "kind": "interactive simulation/diagram module",
        "description": "In the simulation below you can observe the position of the Earth and its axis of rotation at different points of the year: The four colored line segments mark four important po...",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "earth-and-sun",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "earth-and-sun:module-10",
        "articleId": "earth-and-sun",
        "moduleId": "module-10",
        "index": 10,
        "title": "Everything’s Moving",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Everything’s Moving within Earth and Sun using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "earth-and-sun",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "earth-and-sun:module-11",
        "articleId": "earth-and-sun",
        "moduleId": "module-11",
        "index": 11,
        "title": "Further Watching and Reading",
        "kind": "reference/narrative section",
        "description": "Narrative/reference section in Earth and Sun that summarizes results and links supporting resources.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "earth-and-sun",
        "visual": "mechanical-train",
        "layout": "note",
        "noteOnly": true,
        "controls": [],
        "defaultPreset": {},
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "earth-and-sun:module-12",
        "articleId": "earth-and-sun",
        "moduleId": "module-12",
        "index": 12,
        "title": "Final Words",
        "kind": "reference/narrative section",
        "description": "Narrative/reference section in Earth and Sun that summarizes results and links supporting resources.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "earth-and-sun",
        "visual": "projection-lab",
        "layout": "note",
        "noteOnly": true,
        "controls": [],
        "defaultPreset": {},
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "earth-and-sun:module-13",
        "articleId": "earth-and-sun",
        "moduleId": "module-13",
        "index": 13,
        "title": "You can adjust that ratio with a slider",
        "kind": "interactive simulation/diagram module",
        "description": "In the demonstration below you can adjust that ratio with a slider: This ratio is known as eccentricity .",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "earth-and-sun",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "earth-and-sun:module-14",
        "articleId": "earth-and-sun",
        "moduleId": "module-14",
        "index": 14,
        "title": "At your current viewing scale the Earth is",
        "kind": "interactive simulation/diagram module",
        "description": "At your current viewing scale the Earth is pretty much invisible, it has a diameter of pixels, so instead its location is shown by an arrow.",
        "controlsSummary": "implicit controls",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "earth-and-sun",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "earth-and-sun:module-15",
        "articleId": "earth-and-sun",
        "moduleId": "module-15",
        "index": 15,
        "title": "You can change the time of day by dragging the",
        "kind": "interactive simulation/diagram module",
        "description": "In the simulation below you can change the time of day by dragging the slider.",
        "controlsSummary": "slider/range, drag",
        "responseSummary": "parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "earth-and-sun",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag"
        ]
      },
      {
        "sceneId": "earth-and-sun:module-16",
        "articleId": "earth-and-sun",
        "moduleId": "module-16",
        "index": 16,
        "title": "Drag around to spin the globe freely in space",
        "kind": "interactive simulation/diagram module",
        "description": "You can drag around to spin the globe freely in space.",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "earth-and-sun",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "earth-and-sun:module-17",
        "articleId": "earth-and-sun",
        "moduleId": "module-17",
        "index": 17,
        "title": "See how the precession causes the point of March equinox",
        "kind": "interactive simulation/diagram module",
        "description": "In the exaggerated simulation below you can see how the precession causes the point of March equinox to change.",
        "controlsSummary": "implicit controls",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "earth-and-sun",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      }
    ]
  },
  {
    "id": "gears",
    "title": "Gears",
    "author": "Bartosz Ciechanowski",
    "url": "https://ciechanow.ski/gears/",
    "lead": "Mechanical transmission explainer about angular velocity, torque transfer, involute tooth geometry, and multi-gear train behavior.",
    "about": [
      "Mechanical transmission explainer about angular velocity, torque transfer, involute tooth geometry, and multi-gear train behavior.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 23,
    "modules": [
      {
        "sceneId": "gears:module-01",
        "articleId": "gears",
        "moduleId": "module-01",
        "index": 1,
        "title": "Gears",
        "kind": "interactive simulation/diagram module",
        "description": "The only useful component of the contact force between the two gears will be acting in the direction of that normal - that’s the pushing force which I depicted using the black a...",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "gears",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "gears:module-02",
        "articleId": "gears",
        "moduleId": "module-02",
        "index": 2,
        "title": "Spinning",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Spinning within Gears using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "gears",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "gears:module-03",
        "articleId": "gears",
        "moduleId": "module-03",
        "index": 3,
        "title": "Disc",
        "kind": "interactive simulation/diagram module",
        "description": "In the demonstration below you can control its angular velocity with a slider: The small triangular indicator is there to help visualize the current orientation of the disc.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "gears",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "gears:module-04",
        "articleId": "gears",
        "moduleId": "module-04",
        "index": 4,
        "title": "Transmission",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Transmission within Gears using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "gears",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "gears:module-05",
        "articleId": "gears",
        "moduleId": "module-05",
        "index": 5,
        "title": "Torque",
        "kind": "interactive simulation/diagram module",
        "description": "However, the radii of both discs are scaled by the same factor of cos(alpha) , where alpha is the pressure angle controlled by the slider in the simulation above: T out = T in ·...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "gears",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "gears:module-06",
        "articleId": "gears",
        "moduleId": "module-06",
        "index": 6,
        "title": "Tangent & Normal",
        "kind": "interactive simulation/diagram module",
        "description": "The only useful component of the contact force between the two gears will be acting in the direction of that normal - that’s the pushing force which I depicted using the black a...",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "gears",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "gears:module-07",
        "articleId": "gears",
        "moduleId": "module-07",
        "index": 7,
        "title": "Strings Attached",
        "kind": "interactive simulation/diagram module",
        "description": "I attached a piece of paper to the underside of the yellow disc so that we can see the trail left by the marker as the disc rotates: The straight part of the string represents t...",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "particle/marker traces update as flow state changes",
        "renderer": "canvas",
        "family": "gears",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "gears:module-08",
        "articleId": "gears",
        "moduleId": "module-08",
        "index": 8,
        "title": "Multiple Gears",
        "kind": "interactive simulation/diagram module",
        "description": "The only useful component of the contact force between the two gears will be acting in the direction of that normal - that’s the pushing force which I depicted using the black a...",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "gears",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "gears:module-09",
        "articleId": "gears",
        "moduleId": "module-09",
        "index": 9,
        "title": "Further Watching and Reading",
        "kind": "reference/narrative section",
        "description": "Narrative/reference section in Gears that summarizes results and links supporting resources.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "gears",
        "visual": "mechanical-train",
        "layout": "note",
        "noteOnly": true,
        "controls": [],
        "defaultPreset": {},
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "gears:module-10",
        "articleId": "gears",
        "moduleId": "module-10",
        "index": 10,
        "title": "Final Words",
        "kind": "reference/narrative section",
        "description": "Narrative/reference section in Gears that summarizes results and links supporting resources.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "gears",
        "visual": "mechanical-train",
        "layout": "note",
        "noteOnly": true,
        "controls": [],
        "defaultPreset": {},
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "gears:module-11",
        "articleId": "gears",
        "moduleId": "module-11",
        "index": 11,
        "title": "Play and pause them by clicking tapping on the button",
        "kind": "interactive simulation/diagram module",
        "description": "Movement is important in this article so most of the visualizations are animated - you can play and pause them by clicking tapping on the button in their bottom left corner.",
        "controlsSummary": "play/pause",
        "responseSummary": "time progression can be paused/resumed for frame-by-frame inspection",
        "renderer": "canvas",
        "family": "gears",
        "visual": "click-ratchet",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          },
          {
            "kind": "action",
            "id": "pause-toggle",
            "label": "pause motion"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "pauseGroup": "gears-motion",
        "gestures": [
          "play/pause"
        ]
      },
      {
        "sceneId": "gears:module-12",
        "articleId": "gears",
        "moduleId": "module-12",
        "index": 12,
        "title": "Globally pause all animations, just make sure to unpause them",
        "kind": "interactive simulation/diagram module",
        "description": "By default the animations are enabled, but if you find them distracting, or you want to save power, you can globally pause all animations, just make sure to unpause them as needed.",
        "controlsSummary": "play/pause",
        "responseSummary": "time progression can be paused/resumed for frame-by-frame inspection",
        "renderer": "canvas",
        "family": "gears",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          },
          {
            "kind": "action",
            "id": "pause-toggle",
            "label": "pause motion"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "pauseGroup": "gears-motion",
        "gestures": [
          "play/pause"
        ]
      },
      {
        "sceneId": "gears:module-13",
        "articleId": "gears",
        "moduleId": "module-13",
        "index": 13,
        "title": "You can control the fan’s speed using a slider",
        "kind": "interactive simulation/diagram module",
        "description": "In the demonstration below you can control the fan’s speed using a slider: The speed of a rotating fan is a different kind of speed than that of a car - it describes how quickly...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "gears",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "gears:module-14",
        "articleId": "gears",
        "moduleId": "module-14",
        "index": 14,
        "title": "Let’s investigate what’s going on by controlling the",
        "kind": "interactive simulation/diagram module",
        "description": "Let’s investigate what’s going on by controlling the time back and forth with a slider.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "gears",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "gears:module-15",
        "articleId": "gears",
        "moduleId": "module-15",
        "index": 15,
        "title": "See the flattened arcs of the paths traced by the",
        "kind": "interactive simulation/diagram module",
        "description": "As the disc rotates the points leave a trace of the path they followed: At the bottom part of the simulation you can see the flattened arcs of the paths traced by the six points.",
        "controlsSummary": "implicit controls",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "gears",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "gestures": []
      },
      {
        "sceneId": "gears:module-16",
        "articleId": "gears",
        "moduleId": "module-16",
        "index": 16,
        "title": "The driving yellow disc is powered by some engine, which",
        "kind": "interactive simulation/diagram module",
        "description": "In the demonstration below the driving yellow disc is powered by some engine, which I’ve indicated using a rotating arrow near the shaft.",
        "controlsSummary": "implicit controls",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "gears",
        "visual": "mainspring",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "gestures": []
      },
      {
        "sceneId": "gears:module-17",
        "articleId": "gears",
        "moduleId": "module-17",
        "index": 17,
        "title": "You can control the ratio of radii of the two",
        "kind": "interactive simulation/diagram module",
        "description": "In the simulation below you can control the ratio of radii of the two discs.",
        "controlsSummary": "implicit controls",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "gears",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "gestures": []
      },
      {
        "sceneId": "gears:module-18",
        "articleId": "gears",
        "moduleId": "module-18",
        "index": 18,
        "title": "You can witness what happens to the effective circle radii",
        "kind": "interactive simulation/diagram module",
        "description": "In the simulation below you can witness what happens to the effective circle radii when the line of force does not go through the pitch point: As you can see, if the acting forc...",
        "controlsSummary": "implicit controls",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "gears",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "gestures": []
      },
      {
        "sceneId": "gears:module-19",
        "articleId": "gears",
        "moduleId": "module-19",
        "index": 19,
        "title": "Let’s see what happens when we put a",
        "kind": "interactive simulation/diagram module",
        "description": "Let’s see what happens when we put a little perpendicular red marker on that string and start unwinding it from one disc and winding it onto another.",
        "controlsSummary": "implicit controls",
        "responseSummary": "particle/marker traces update as flow state changes",
        "renderer": "canvas",
        "family": "gears",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "gestures": []
      },
      {
        "sceneId": "gears:module-20",
        "articleId": "gears",
        "moduleId": "module-20",
        "index": 20,
        "title": "However, that’s exactly what the red marker does",
        "kind": "chart/plot module",
        "description": "However, that’s exactly what the red marker does - at every point of the curve it is perpendicular to the string, and thus it’s perpendicular to the normal.",
        "controlsSummary": "implicit controls",
        "responseSummary": "particle/marker traces update as flow state changes",
        "renderer": "svg",
        "family": "gears",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": []
      },
      {
        "sceneId": "gears:module-21",
        "articleId": "gears",
        "moduleId": "module-21",
        "index": 21,
        "title": "We can look at this same situation from",
        "kind": "interactive simulation/diagram module",
        "description": "We can look at this same situation from a point of view of the single disc, by unwinding a string with a marker from its surface: The shape we’ve created is called an involute .",
        "controlsSummary": "implicit controls",
        "responseSummary": "particle/marker traces update as flow state changes",
        "renderer": "canvas",
        "family": "gears",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "gestures": []
      },
      {
        "sceneId": "gears:module-22",
        "articleId": "gears",
        "moduleId": "module-22",
        "index": 22,
        "title": "The magic marker at the end of the",
        "kind": "interactive simulation/diagram module",
        "description": "The magic marker at the end of the string passes through the pitch circle , which corresponds to the idealized friction disc, only to end at the addendum circle which defines th...",
        "controlsSummary": "implicit controls",
        "responseSummary": "particle/marker traces update as flow state changes",
        "renderer": "canvas",
        "family": "gears",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "gestures": []
      },
      {
        "sceneId": "gears:module-23",
        "articleId": "gears",
        "moduleId": "module-23",
        "index": 23,
        "title": "The green line shows the pitch circle, the red line",
        "kind": "interactive simulation/diagram module",
        "description": "In the simulation below the green line shows the pitch circle, the red line shows the base circle of the involute, and the slider controls the radius of the gear: Two matching i...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "gears",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "gestures": [
          "slider/range"
        ]
      }
    ]
  },
  {
    "id": "gps",
    "title": "GPS",
    "author": "Bartosz Ciechanowski",
    "url": "https://ciechanow.ski/gps/",
    "lead": "End-to-end GPS explainer including trilateration, clock bias, orbital motion, satellite visibility, and signal propagation constraints.",
    "about": [
      "End-to-end GPS explainer including trilateration, clock bias, orbital motion, satellite visibility, and signal propagation constraints.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 26,
    "modules": [
      {
        "sceneId": "gps:module-01",
        "articleId": "gps",
        "moduleId": "module-01",
        "index": 1,
        "title": "GPS",
        "kind": "interactive simulation/diagram module",
        "description": "Demonstrates satellite geometry and timing calculations used to estimate receiver position and clock bias.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "gps",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "sharedGroup": "gps-core",
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "gps:module-02",
        "articleId": "gps",
        "moduleId": "module-02",
        "index": 2,
        "title": "Simple Positioning",
        "kind": "interactive simulation/diagram module",
        "description": "Notice that the intersection point of the three spheres lets us pinpoint the position and altitude even as you drag the figurine around: Throughout these examples we’ve been usi...",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "gps",
        "visual": "trilateration",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "sharedGroup": "gps-core",
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "gps:module-03",
        "articleId": "gps",
        "moduleId": "module-03",
        "index": 3,
        "title": "Time of Flight",
        "kind": "interactive simulation/diagram module",
        "description": "In the simulation below you can control the progress of time with the slider.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "gps",
        "visual": "signal-timeline",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "sharedGroup": "gps-core",
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "gps:module-04",
        "articleId": "gps",
        "moduleId": "module-04",
        "index": 4,
        "title": "Do you hear me?",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Do you hear me? within GPS using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "gps",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "sharedGroup": "gps-core",
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "gps:module-05",
        "articleId": "gps",
        "moduleId": "module-05",
        "index": 5,
        "title": "Do I hear you?",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Do I hear you? within GPS using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "gps",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "sharedGroup": "gps-core",
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "gps:module-06",
        "articleId": "gps",
        "moduleId": "module-06",
        "index": 6,
        "title": "Leveling Up",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Leveling Up within GPS using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "gps",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "sharedGroup": "gps-core",
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "gps:module-07",
        "articleId": "gps",
        "moduleId": "module-07",
        "index": 7,
        "title": "Higher, Better, Faster, Stronger",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Higher, Better, Faster, Stronger within GPS using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "gps",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "sharedGroup": "gps-core",
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "gps:module-08",
        "articleId": "gps",
        "moduleId": "module-08",
        "index": 8,
        "title": "Orbits",
        "kind": "interactive simulation/diagram module",
        "description": "Demonstrates orbital geometry and time evolution, including parameter effects on trajectory and position over time.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "gps",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "sharedGroup": "gps-core",
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "gps:module-09",
        "articleId": "gps",
        "moduleId": "module-09",
        "index": 9,
        "title": "GPS Orbits",
        "kind": "interactive simulation/diagram module",
        "description": "Demonstrates orbital geometry and time evolution, including parameter effects on trajectory and position over time.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "gps",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "sharedGroup": "gps-core",
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "gps:module-10",
        "articleId": "gps",
        "moduleId": "module-10",
        "index": 10,
        "title": "Keplerian Elements",
        "kind": "interactive simulation/diagram module",
        "description": "Demonstrates orbital geometry and time evolution, including parameter effects on trajectory and position over time.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "gps",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "sharedGroup": "gps-core",
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "gps:module-11",
        "articleId": "gps",
        "moduleId": "module-11",
        "index": 11,
        "title": "Time",
        "kind": "interactive simulation/diagram module",
        "description": "In the simulation below you can control the progress of time with the slider.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "gps",
        "visual": "signal-timeline",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "sharedGroup": "gps-core",
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "gps:module-12",
        "articleId": "gps",
        "moduleId": "module-12",
        "index": 12,
        "title": "Signal Propagation",
        "kind": "interactive simulation/diagram module",
        "description": "In many cases the receiver will never get the signal unless we put the emitter high enough using the second slider: By putting the emitter at an altitude we can thankfully mitig...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "gps",
        "visual": "signal-timeline",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "sharedGroup": "gps-core",
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "gps:module-13",
        "articleId": "gps",
        "moduleId": "module-13",
        "index": 13,
        "title": "Drag the view around to see it from different angles:",
        "kind": "interactive simulation/diagram module",
        "description": "Here’s a current constellation of active satellites, you can drag the view around to see it from different angles: However, the satellites are just a part of what makes GPS poss...",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "gps",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "sharedGroup": "gps-core",
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "gps:module-14",
        "articleId": "gps",
        "moduleId": "module-14",
        "index": 14,
        "title": "Drag the landscape itself to change the viewing angle",
        "kind": "interactive simulation/diagram module",
        "description": "You can also drag the landscape itself to change the viewing angle.",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "gps",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "sharedGroup": "gps-core",
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "gps:module-15",
        "articleId": "gps",
        "moduleId": "module-15",
        "index": 15,
        "title": "We’re sending two drones at the same time, the slider",
        "kind": "interactive simulation/diagram module",
        "description": "In the demonstration below we’re sending two drones at the same time, the slider once again controls the time : As the drones arrive to their destinations we get the direct meas...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "gps",
        "visual": "signal-timeline",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "sharedGroup": "gps-core",
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "gps:module-16",
        "articleId": "gps",
        "moduleId": "module-16",
        "index": 16,
        "title": "Thankfully, with two clocks side by side we",
        "kind": "interactive simulation/diagram module",
        "description": "Thankfully, with two clocks side by side we can try to correct for that bias using the second slider: Notice that the timeline at the bottom shows progress of both the system cl...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "gps",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "sharedGroup": "gps-core",
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "gps:module-17",
        "articleId": "gps",
        "moduleId": "module-17",
        "index": 17,
        "title": "You can control the user’s vertical position with a slider",
        "kind": "interactive simulation/diagram module",
        "description": "In the demonstration below you can control the user’s vertical position with a slider.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "gps",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "sharedGroup": "gps-core",
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "gps:module-18",
        "articleId": "gps",
        "moduleId": "module-18",
        "index": 18,
        "title": "Experience in the following simulation",
        "kind": "interactive simulation/diagram module",
        "description": "So far we assumed that our local environment is perfectly flat, but when a radio wave encounters a hill it gets blocked, which you can experience in the following simulation.",
        "controlsSummary": "implicit controls",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "gps",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "sharedGroup": "gps-core",
        "gestures": []
      },
      {
        "sceneId": "gps:module-19",
        "articleId": "gps",
        "moduleId": "module-19",
        "index": 19,
        "title": "You can drag the yellow object around",
        "kind": "interactive simulation/diagram module",
        "description": "In the demonstration below you can drag the yellow object around.",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "gps",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "sharedGroup": "gps-core",
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "gps:module-20",
        "articleId": "gps",
        "moduleId": "module-20",
        "index": 20,
        "title": "As the object starts to move a yellow",
        "kind": "interactive simulation/diagram module",
        "description": "As the object starts to move a yellow arrow reflects its current velocity: Note that the strength at which the object is pulled towards the planet varies with distance.",
        "controlsSummary": "implicit controls",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "gps",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "sharedGroup": "gps-core",
        "gestures": []
      },
      {
        "sceneId": "gps:module-21",
        "articleId": "gps",
        "moduleId": "module-21",
        "index": 21,
        "title": "You can once again drag the object around, but this",
        "kind": "interactive simulation/diagram module",
        "description": "In the demonstration below you can once again drag the object around, but this time it will have some initial velocity that was perhaps given to it by a rocket.",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "gps",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "sharedGroup": "gps-core",
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "gps:module-22",
        "articleId": "gps",
        "moduleId": "module-22",
        "index": 22,
        "title": "Notice that the speed of the object ,",
        "kind": "interactive simulation/diagram module",
        "description": "Notice that the speed of the object , as shown by the length of the yellow arrow , varies over the course of its journey.",
        "controlsSummary": "implicit controls",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "gps",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "sharedGroup": "gps-core",
        "gestures": []
      },
      {
        "sceneId": "gps:module-23",
        "articleId": "gps",
        "moduleId": "module-23",
        "index": 23,
        "title": "Play and pause them by clicking tapping on the button",
        "kind": "interactive simulation/diagram module",
        "description": "Before we continue, I need to note that some demonstrations in the following sections are animated - you can play and pause them by clicking tapping on the button in their botto...",
        "controlsSummary": "play/pause",
        "responseSummary": "time progression can be paused/resumed for frame-by-frame inspection",
        "renderer": "canvas",
        "family": "gps",
        "visual": "click-ratchet",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          },
          {
            "kind": "action",
            "id": "pause-toggle",
            "label": "pause motion"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "pauseGroup": "gps-motion",
        "gestures": [
          "play/pause"
        ]
      },
      {
        "sceneId": "gps:module-24",
        "articleId": "gps",
        "moduleId": "module-24",
        "index": 24,
        "title": "Globally pause all the following demonstrations",
        "kind": "interactive simulation/diagram module",
        "description": "By default all animations are enabled, but if you find them distracting, or if you want to save power, you can globally pause all the following demonstrations.",
        "controlsSummary": "play/pause",
        "responseSummary": "time progression can be paused/resumed for frame-by-frame inspection",
        "renderer": "canvas",
        "family": "gps",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          },
          {
            "kind": "action",
            "id": "pause-toggle",
            "label": "pause motion"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "sharedGroup": "gps-core",
        "pauseGroup": "gps-motion",
        "gestures": [
          "play/pause"
        ]
      },
      {
        "sceneId": "gps:module-25",
        "articleId": "gps",
        "moduleId": "module-25",
        "index": 25,
        "title": "You may have noticed that the red slider",
        "kind": "interactive simulation/diagram module",
        "description": "You may have noticed that the red slider controls the inclination of the orbit which is the angle between the orbital plane and the plane passing through the Earth’s equator kno...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "gps",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "sharedGroup": "gps-core",
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "gps:module-26",
        "articleId": "gps",
        "moduleId": "module-26",
        "index": 26,
        "title": "You can drag the red point around to change its",
        "kind": "interactive simulation/diagram module",
        "description": "In the demonstration below you can drag the red point around to change its position on the globe.",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "gps",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "sharedGroup": "gps-core",
        "gestures": [
          "drag"
        ]
      }
    ]
  },
  {
    "id": "hysteresis-slack",
    "title": "Hysteresis & Slack",
    "author": "joshuahhh",
    "url": "https://joshuahhh.com/projects/hysteresis/",
    "lead": "Interactive intuition-builder for hysteresis and mechanical slack showing path dependence, loops, and memory effects in input-output systems.",
    "about": [
      "Interactive intuition-builder for hysteresis and mechanical slack showing path dependence, loops, and memory effects in input-output systems.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 11,
    "modules": [
      {
        "sceneId": "hysteresis-slack:module-01",
        "articleId": "hysteresis-slack",
        "moduleId": "module-01",
        "index": 1,
        "title": "hysteresis & slack",
        "kind": "interactive simulation/diagram module",
        "description": "In this one, the output pin of the slider is connected to the input pin , but it's not a rigid connection: there's slack .",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "svg",
        "family": "hysteresis-slack",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "sharedGroup": "hysteresis-core",
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "hysteresis-slack:module-02",
        "articleId": "hysteresis-slack",
        "moduleId": "module-02",
        "index": 2,
        "title": "Here are two machines you can control",
        "kind": "interactive simulation/diagram module",
        "description": "In this one, the output pin of the slider is connected to the input pin , but it's not a rigid connection: there's slack .",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "svg",
        "family": "hysteresis-slack",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "sharedGroup": "hysteresis-core",
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "hysteresis-slack:module-03",
        "articleId": "hysteresis-slack",
        "moduleId": "module-03",
        "index": 3,
        "title": "Set a trajectory for the input pin",
        "kind": "interactive simulation/diagram module",
        "description": "In this one, the output pin of the slider is rigidly connected to the input pin .",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "hysteresis-slack",
        "visual": "trajectory-editor",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "sharedGroup": "hysteresis-core",
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "hysteresis-slack:module-04",
        "articleId": "hysteresis-slack",
        "moduleId": "module-04",
        "index": 4,
        "title": "The first plot is a simple curve",
        "kind": "chart/plot module",
        "description": "The first plot is a simple curve.",
        "controlsSummary": "implicit controls",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "hysteresis-slack",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "sharedGroup": "hysteresis-core",
        "gestures": []
      },
      {
        "sceneId": "hysteresis-slack:module-05",
        "articleId": "hysteresis-slack",
        "moduleId": "module-05",
        "index": 5,
        "title": "But the second plot is made out of",
        "kind": "chart/plot module",
        "description": "But the second plot is made out of loops.",
        "controlsSummary": "implicit controls",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "hysteresis-slack",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "sharedGroup": "hysteresis-core",
        "gestures": []
      },
      {
        "sceneId": "hysteresis-slack:module-06",
        "articleId": "hysteresis-slack",
        "moduleId": "module-06",
        "index": 6,
        "title": "So let's give the computer some \"history\" to",
        "kind": "interactive simulation/diagram module",
        "description": "So let's give the computer some \"history\" to play with.",
        "controlsSummary": "play/pause",
        "responseSummary": "time progression can be paused/resumed for frame-by-frame inspection",
        "renderer": "svg",
        "family": "hysteresis-slack",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "sharedGroup": "hysteresis-core",
        "pauseGroup": "hysteresis-slack-motion",
        "gestures": [
          "play/pause"
        ]
      },
      {
        "sceneId": "hysteresis-slack:module-07",
        "articleId": "hysteresis-slack",
        "moduleId": "module-07",
        "index": 7,
        "title": "Click & drag to define the path of",
        "kind": "interactive simulation/diagram module",
        "description": "Click & drag to define the path of the input pin over time.",
        "controlsSummary": "drag, click/tap",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly; click actions trigger state transitions or object selection",
        "renderer": "svg",
        "family": "hysteresis-slack",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "sharedGroup": "hysteresis-core",
        "gestures": [
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "hysteresis-slack:module-08",
        "articleId": "hysteresis-slack",
        "moduleId": "module-08",
        "index": 8,
        "title": "Hover to see the future trajectory of the",
        "kind": "interactive simulation/diagram module",
        "description": "Hover to see the future trajectory of the output pin from the point you've selected.",
        "controlsSummary": "hover",
        "responseSummary": "hover reveals contextual overlays or future trajectory hints",
        "renderer": "canvas",
        "family": "hysteresis-slack",
        "visual": "trajectory-editor",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "sharedGroup": "hysteresis-core",
        "gestures": [
          "hover"
        ]
      },
      {
        "sceneId": "hysteresis-slack:module-09",
        "articleId": "hysteresis-slack",
        "moduleId": "module-09",
        "index": 9,
        "title": "One way to put it — the slider",
        "kind": "interactive simulation/diagram module",
        "description": "One way to put it — the slider has a memory (the position of the output pin), which has its own existence, independent of the input.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "svg",
        "family": "hysteresis-slack",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "sharedGroup": "hysteresis-core",
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "hysteresis-slack:module-10",
        "articleId": "hysteresis-slack",
        "moduleId": "module-10",
        "index": 10,
        "title": "So, if the external forces are strong enough,",
        "kind": "interactive simulation/diagram module",
        "description": "So, if the external forces are strong enough, the slider's memory is overwhelmed.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "svg",
        "family": "hysteresis-slack",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "sharedGroup": "hysteresis-core",
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "hysteresis-slack:module-11",
        "articleId": "hysteresis-slack",
        "moduleId": "module-11",
        "index": 11,
        "title": "It's like H is the input pin and",
        "kind": "interactive simulation/diagram module",
        "description": "It's like H is the input pin and M is the output pin in some weird slider system.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "svg",
        "family": "hysteresis-slack",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "sharedGroup": "hysteresis-core",
        "gestures": [
          "slider/range"
        ]
      }
    ]
  },
  {
    "id": "immersive-linear-algebra",
    "title": "Immersive Linear Algebra",
    "author": "J. Strom, K. Astrom, and T. Akenine-Moller",
    "url": "https://immersivemath.com/ila/index.html",
    "lead": "Immersive linear algebra learning site (access currently unavailable from this audit environment) intended to teach vectors, transforms, and geometric intuition interactively.",
    "about": [
      "Immersive linear algebra learning site (access currently unavailable from this audit environment) intended to teach vectors, transforms, and geometric intuition interactively.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 3,
    "modules": [
      {
        "sceneId": "immersive-linear-algebra:module-01",
        "articleId": "immersive-linear-algebra",
        "moduleId": "module-01",
        "index": 1,
        "title": "Vector and basis scene",
        "kind": "interactive simulation/diagram module",
        "description": "Likely demonstrates vectors and basis changes in geometric space.",
        "controlsSummary": "unknown due access block",
        "responseSummary": "expected real-time updates of vectors/basis when controls change",
        "renderer": "canvas",
        "family": "immersive-linear-algebra",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "immersive-linear-algebra:module-02",
        "articleId": "immersive-linear-algebra",
        "moduleId": "module-02",
        "index": 2,
        "title": "Linear transform controls",
        "kind": "interactive simulation/diagram module",
        "description": "Likely demonstrates rotation, scaling, and shearing via matrix parameters.",
        "controlsSummary": "unknown due access block",
        "responseSummary": "expected geometry updates from matrix parameter changes",
        "renderer": "canvas",
        "family": "immersive-linear-algebra",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "immersive-linear-algebra:module-03",
        "articleId": "immersive-linear-algebra",
        "moduleId": "module-03",
        "index": 3,
        "title": "Matrix-to-geometry mapping panel",
        "kind": "chart/plot module",
        "description": "Likely links matrix entries to transformed objects and coordinate effects.",
        "controlsSummary": "unknown due access block",
        "responseSummary": "expected synchronized formula and geometry updates",
        "renderer": "svg",
        "family": "immersive-linear-algebra",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": []
      }
    ]
  },
  {
    "id": "internal-combustion-engine",
    "title": "Internal Combustion Engine",
    "author": "Bartosz Ciechanowski",
    "url": "https://ciechanow.ski/internal-combustion-engine/",
    "lead": "Mechanical ICE explainer that decomposes crankshaft kinematics, cam timing, piston motion, and cycle behavior with synchronized animated parts.",
    "about": [
      "Mechanical ICE explainer that decomposes crankshaft kinematics, cam timing, piston motion, and cycle behavior with synchronized animated parts.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 13,
    "modules": [
      {
        "sceneId": "internal-combustion-engine:module-01",
        "articleId": "internal-combustion-engine",
        "moduleId": "module-01",
        "index": 1,
        "title": "Internal Combustion Engine",
        "kind": "interactive simulation/diagram module",
        "description": "The plot in the upper part shows the offset of the bucket relative to its normal position as the function of cam rotation angle : The shape of the cam is critical for defining t...",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "canvas",
        "family": "internal-combustion-engine",
        "visual": "engine-cycle",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "internal-combustion-engine:module-02",
        "articleId": "internal-combustion-engine",
        "moduleId": "module-02",
        "index": 2,
        "title": "Crank",
        "kind": "interactive simulation/diagram module",
        "description": "You can control the rotation of the crankshaft with a slider: Notice that when the crank arm has done a 90° turn , i.e.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "internal-combustion-engine",
        "visual": "engine-cycle",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "internal-combustion-engine:module-03",
        "articleId": "internal-combustion-engine",
        "moduleId": "module-03",
        "index": 3,
        "title": "Engine Block",
        "kind": "interactive simulation/diagram module",
        "description": "The plot in the upper part shows the offset of the bucket relative to its normal position as the function of cam rotation angle : The shape of the cam is critical for defining t...",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "canvas",
        "family": "internal-combustion-engine",
        "visual": "engine-cycle",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "internal-combustion-engine:module-04",
        "articleId": "internal-combustion-engine",
        "moduleId": "module-04",
        "index": 4,
        "title": "Crankshaft",
        "kind": "interactive simulation/diagram module",
        "description": "You can control the rotation of the crankshaft with a slider: Notice that when the crank arm has done a 90° turn , i.e.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "internal-combustion-engine",
        "visual": "engine-cycle",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "internal-combustion-engine:module-05",
        "articleId": "internal-combustion-engine",
        "moduleId": "module-05",
        "index": 5,
        "title": "Pistons",
        "kind": "interactive simulation/diagram module",
        "description": "Animates linked engine components to show kinematic coupling, phase timing, and cycle transitions.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "internal-combustion-engine",
        "visual": "engine-cycle",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "internal-combustion-engine:module-06",
        "articleId": "internal-combustion-engine",
        "moduleId": "module-06",
        "index": 6,
        "title": "Closing the Lid",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Closing the Lid within Internal Combustion Engine using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "internal-combustion-engine",
        "visual": "engine-cycle",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "internal-combustion-engine:module-07",
        "articleId": "internal-combustion-engine",
        "moduleId": "module-07",
        "index": 7,
        "title": "Combustion",
        "kind": "interactive simulation/diagram module",
        "description": "Animates linked engine components to show kinematic coupling, phase timing, and cycle transitions.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "internal-combustion-engine",
        "visual": "engine-cycle",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "internal-combustion-engine:module-08",
        "articleId": "internal-combustion-engine",
        "moduleId": "module-08",
        "index": 8,
        "title": "Further Watching",
        "kind": "reference/narrative section",
        "description": "Narrative/reference section in Internal Combustion Engine that summarizes results and links supporting resources.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "internal-combustion-engine",
        "visual": "mechanical-train",
        "layout": "note",
        "noteOnly": true,
        "controls": [],
        "defaultPreset": {},
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "internal-combustion-engine:module-09",
        "articleId": "internal-combustion-engine",
        "moduleId": "module-09",
        "index": 9,
        "title": "Final Words",
        "kind": "reference/narrative section",
        "description": "Narrative/reference section in Internal Combustion Engine that summarizes results and links supporting resources.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "internal-combustion-engine",
        "visual": "engine-cycle",
        "layout": "note",
        "noteOnly": true,
        "controls": [],
        "defaultPreset": {},
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "internal-combustion-engine:module-10",
        "articleId": "internal-combustion-engine",
        "moduleId": "module-10",
        "index": 10,
        "title": "Drag it around to see it from other angles: It’s",
        "kind": "interactive simulation/diagram module",
        "description": "You can drag it around to see it from other angles: It’s hard to talk about a mechanical device without visualizing its motion, so many demonstrations in this blog post are anim...",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "internal-combustion-engine",
        "visual": "engine-cycle",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "internal-combustion-engine:module-11",
        "articleId": "internal-combustion-engine",
        "moduleId": "module-11",
        "index": 11,
        "title": "Globally pause them",
        "kind": "interactive simulation/diagram module",
        "description": "By default all animations are enabled, but if you find them distracting, or if you want to save power, you can globally pause them.",
        "controlsSummary": "play/pause",
        "responseSummary": "time progression can be paused/resumed for frame-by-frame inspection",
        "renderer": "canvas",
        "family": "internal-combustion-engine",
        "visual": "engine-cycle",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "pauseGroup": "internal-combustion-engine-motion",
        "gestures": [
          "play/pause"
        ]
      },
      {
        "sceneId": "internal-combustion-engine:module-12",
        "articleId": "internal-combustion-engine",
        "moduleId": "module-12",
        "index": 12,
        "title": "Let’s look at the plot of the velocity",
        "kind": "chart/plot module",
        "description": "Let’s look at the plot of the velocity of a piston as it moves up and down the cylinder when the crankshaft rotates with a constant angular velocity: You may be surprised that t...",
        "controlsSummary": "implicit controls",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "internal-combustion-engine",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": []
      },
      {
        "sceneId": "internal-combustion-engine:module-13",
        "articleId": "internal-combustion-engine",
        "moduleId": "module-13",
        "index": 13,
        "title": "Let’s consider a piston in a top dead",
        "kind": "interactive simulation/diagram module",
        "description": "Let’s consider a piston in a top dead center position - as the piston reaches that point its velocity is 0, so the crankshaft has to drag the piston down.",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "internal-combustion-engine",
        "visual": "engine-cycle",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "drag"
        ]
      }
    ]
  },
  {
    "id": "lights-and-shadows",
    "title": "Lights and Shadows",
    "author": "Bartosz Ciechanowski",
    "url": "https://ciechanow.ski/lights-and-shadows/",
    "lead": "Physically-based light transport explainer covering radiance, angle and distance falloff, reflection models, shadows, and multiple bounces.",
    "about": [
      "Physically-based light transport explainer covering radiance, angle and distance falloff, reflection models, shadows, and multiple bounces.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 24,
    "modules": [
      {
        "sceneId": "lights-and-shadows:module-01",
        "articleId": "lights-and-shadows",
        "moduleId": "module-01",
        "index": 1,
        "title": "Lights and Shadows",
        "kind": "interactive simulation/diagram module",
        "description": "Simulates light transport (direction, intensity, reflection, and occlusion) to show how shading and shadows emerge.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "lights-and-shadows",
        "visual": "shadow-volume",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "lights-and-shadows:module-02",
        "articleId": "lights-and-shadows",
        "moduleId": "module-02",
        "index": 2,
        "title": "Power",
        "kind": "interactive simulation/diagram module",
        "description": "While this ball of light is not very exciting, you can at least control its brightness with the slider below: What this slider actually regulates is the power of the light sourc...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "lights-and-shadows",
        "visual": "shadow-volume",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "lights-and-shadows:module-03",
        "articleId": "lights-and-shadows",
        "moduleId": "module-03",
        "index": 3,
        "title": "Position",
        "kind": "interactive simulation/diagram module",
        "description": "Let’s see how we perceive the brightness of some source depending on its power: Notice that relative change in the perceived brightness strongly depends on the position of the s...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "lights-and-shadows",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "lights-and-shadows:module-04",
        "articleId": "lights-and-shadows",
        "moduleId": "module-04",
        "index": 4,
        "title": "Angles",
        "kind": "interactive simulation/diagram module",
        "description": "You can also drag around the scene to see it from different angles: By the end of this article the effects of light in this demonstration should become more clear, but before we...",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "lights-and-shadows",
        "visual": "shadow-volume",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "lights-and-shadows:module-05",
        "articleId": "lights-and-shadows",
        "moduleId": "module-05",
        "index": 5,
        "title": "Radians",
        "kind": "interactive simulation/diagram module",
        "description": "Radians The car simulation displayed the angle using the unit of degrees, but observe that the length of the yellow arc also gets smaller as the angle gets smaller.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "lights-and-shadows",
        "visual": "shadow-volume",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "lights-and-shadows:module-06",
        "articleId": "lights-and-shadows",
        "moduleId": "module-06",
        "index": 6,
        "title": "Solid Angles",
        "kind": "interactive simulation/diagram module",
        "description": "You can also drag around the scene to see it from different angles: By the end of this article the effects of light in this demonstration should become more clear, but before we...",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "lights-and-shadows",
        "visual": "shadow-volume",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "lights-and-shadows:module-07",
        "articleId": "lights-and-shadows",
        "moduleId": "module-07",
        "index": 7,
        "title": "Surface Vision",
        "kind": "interactive simulation/diagram module",
        "description": "You can drag around the demo to see the scene from a different point of view: While on its own the surface doesn’t emit any light, it reflects the light emitted from the source.",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "lights-and-shadows",
        "visual": "shadow-volume",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "lights-and-shadows:module-08",
        "articleId": "lights-and-shadows",
        "moduleId": "module-08",
        "index": 8,
        "title": "Radiance",
        "kind": "interactive simulation/diagram module",
        "description": "Simulates light transport (direction, intensity, reflection, and occlusion) to show how shading and shadows emerge.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "lights-and-shadows",
        "visual": "shadow-volume",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "lights-and-shadows:module-09",
        "articleId": "lights-and-shadows",
        "moduleId": "module-09",
        "index": 9,
        "title": "Reflections",
        "kind": "interactive simulation/diagram module",
        "description": "Simulates light transport (direction, intensity, reflection, and occlusion) to show how shading and shadows emerge.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "lights-and-shadows",
        "visual": "shadow-volume",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "lights-and-shadows:module-10",
        "articleId": "lights-and-shadows",
        "moduleId": "module-10",
        "index": 10,
        "title": "Shadow",
        "kind": "interactive simulation/diagram module",
        "description": "Simulates light transport (direction, intensity, reflection, and occlusion) to show how shading and shadows emerge.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "lights-and-shadows",
        "visual": "shadow-volume",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "lights-and-shadows:module-11",
        "articleId": "lights-and-shadows",
        "moduleId": "module-11",
        "index": 11,
        "title": "Color",
        "kind": "interactive simulation/diagram module",
        "description": "Shows color-space mapping and conversion behavior, linking numeric channels to visible gamut changes.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "lights-and-shadows",
        "visual": "chromaticity",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "red",
            "label": "red/input",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "range",
            "id": "green",
            "label": "green/gamma",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.42
          },
          {
            "kind": "range",
            "id": "blue",
            "label": "blue/detail",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.68
          },
          {
            "kind": "choice",
            "id": "space",
            "label": "space",
            "value": "sRGB",
            "options": [
              "sRGB",
              "Display P3",
              "XYZ"
            ]
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset palette"
          }
        ],
        "defaultPreset": {
          "red": 0.55,
          "green": 0.42,
          "blue": 0.68,
          "space": "sRGB"
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "lights-and-shadows:module-12",
        "articleId": "lights-and-shadows",
        "moduleId": "module-12",
        "index": 12,
        "title": "Bounces",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Bounces within Lights and Shadows using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "lights-and-shadows",
        "visual": "shadow-volume",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "lights-and-shadows:module-13",
        "articleId": "lights-and-shadows",
        "moduleId": "module-13",
        "index": 13,
        "title": "Position If you looked closely at the previous",
        "kind": "interactive simulation/diagram module",
        "description": "Position If you looked closely at the previous simulation you may have noticed that the surface wasn’t uniformly lit.",
        "controlsSummary": "implicit controls",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "lights-and-shadows",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "gestures": []
      },
      {
        "sceneId": "lights-and-shadows:module-14",
        "articleId": "lights-and-shadows",
        "moduleId": "module-14",
        "index": 14,
        "title": "A red dot terminates a ray that used to hit",
        "kind": "interactive simulation/diagram module",
        "description": "In the simulation below a red dot terminates a ray that used to hit the tiny patch in the perpendicular case, but it no longer does so after tilting: As soon as the light source...",
        "controlsSummary": "implicit controls",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "lights-and-shadows",
        "visual": "shadow-volume",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "lights-and-shadows:module-15",
        "articleId": "lights-and-shadows",
        "moduleId": "module-15",
        "index": 15,
        "title": "The blue arrow shows the surface normal",
        "kind": "interactive simulation/diagram module",
        "description": "The blue arrow shows the surface normal.",
        "controlsSummary": "implicit controls",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "lights-and-shadows",
        "visual": "shadow-volume",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "lights-and-shadows:module-16",
        "articleId": "lights-and-shadows",
        "moduleId": "module-16",
        "index": 16,
        "title": "The yellow arrow points towards the light source:",
        "kind": "interactive simulation/diagram module",
        "description": "The yellow arrow points towards the light source: As the angle increases, a smaller portion of the original stream of light hits the surface.",
        "controlsSummary": "implicit controls",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "lights-and-shadows",
        "visual": "shadow-volume",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "lights-and-shadows:module-17",
        "articleId": "lights-and-shadows",
        "moduleId": "module-17",
        "index": 17,
        "title": "In the example below the yellow arrow shows",
        "kind": "interactive simulation/diagram module",
        "description": "In the example below the yellow arrow shows the direction towards a distant light source: With the cosine factor covered we can now analyze how the distance to the light source ...",
        "controlsSummary": "implicit controls",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "lights-and-shadows",
        "visual": "shadow-volume",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "lights-and-shadows:module-18",
        "articleId": "lights-and-shadows",
        "moduleId": "module-18",
        "index": 18,
        "title": "Control its radius with a slider: Notice, that when the",
        "kind": "interactive simulation/diagram module",
        "description": "That source is surrounded by a sphere - you can control its radius with a slider: Notice, that when the radius of the sphere increases, the density of the yellow intersection po...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "lights-and-shadows",
        "visual": "shadow-volume",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "lights-and-shadows:module-19",
        "articleId": "lights-and-shadows",
        "moduleId": "module-19",
        "index": 19,
        "title": "However, the light source itself doesn’t seem to",
        "kind": "interactive simulation/diagram module",
        "description": "However, the light source itself doesn’t seem to undergo the same effects - it remains consistently bright even as we look at it from an oblique angle or move away from it with ...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "lights-and-shadows",
        "visual": "shadow-volume",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "lights-and-shadows:module-20",
        "articleId": "lights-and-shadows",
        "moduleId": "module-20",
        "index": 20,
        "title": "Every point of a Lambertian emitter emits light",
        "kind": "interactive simulation/diagram module",
        "description": "Every point of a Lambertian emitter emits light in the following spherical pattern, the length of an arrow corresponds to relative number of photons per second emitted in the ar...",
        "controlsSummary": "implicit controls",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "lights-and-shadows",
        "visual": "shadow-volume",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "lights-and-shadows:module-21",
        "articleId": "lights-and-shadows",
        "moduleId": "module-21",
        "index": 21,
        "title": "As the viewing angle tilts, the length of",
        "kind": "interactive simulation/diagram module",
        "description": "As the viewing angle tilts, the length of each arrow gets smaller, so each point of the surface contributes fewer photons towards the observer.",
        "controlsSummary": "implicit controls",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "lights-and-shadows",
        "visual": "shadow-volume",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "lights-and-shadows:module-22",
        "articleId": "lights-and-shadows",
        "moduleId": "module-22",
        "index": 22,
        "title": "The hemispherical model of light aggregation seems to",
        "kind": "interactive simulation/diagram module",
        "description": "The hemispherical model of light aggregation seems to work well for a matte surface, but it certainly doesn’t explain the behavior of a plain mirror: Let’s try to visualize how ...",
        "controlsSummary": "implicit controls",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "lights-and-shadows",
        "visual": "shadow-volume",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "lights-and-shadows:module-23",
        "articleId": "lights-and-shadows",
        "moduleId": "module-23",
        "index": 23,
        "title": "A scene is surrounded by a swarm of tiny light",
        "kind": "interactive simulation/diagram module",
        "description": "In the simulation below a scene is surrounded by a swarm of tiny light sources, you can see their projections onto the hemisphere of the central point: In limit, if we cover the...",
        "controlsSummary": "implicit controls",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "lights-and-shadows",
        "visual": "shadow-volume",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "lights-and-shadows:module-24",
        "articleId": "lights-and-shadows",
        "moduleId": "module-24",
        "index": 24,
        "title": "Make the surrounding sphere of light so big that it",
        "kind": "interactive simulation/diagram module",
        "description": "The light covers everything now so we can’t really see the scene anymore, but by dragging the slider you can make the surrounding sphere of light so big that it will start to en...",
        "controlsSummary": "slider/range, drag",
        "responseSummary": "parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "lights-and-shadows",
        "visual": "shadow-volume",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag"
        ]
      }
    ]
  },
  {
    "id": "load-balancing",
    "title": "Load Balancing",
    "author": "Sam Rose",
    "url": "https://samwho.dev/load-balancing/",
    "lead": "Systems-performance explainer comparing load-balancing algorithms through live request/server simulations and metric plots.",
    "about": [
      "Systems-performance explainer comparing load-balancing algorithms through live request/server simulations and metric plots.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 19,
    "modules": [
      {
        "sceneId": "load-balancing:module-01",
        "articleId": "load-balancing",
        "moduleId": "module-01",
        "index": 1,
        "title": "Load Balancing",
        "kind": "interactive simulation/diagram module",
        "description": "Each simulation varied only by the load balancing algorithm used.",
        "controlsSummary": "slider/range, playback/scrub",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "svg",
        "family": "load-balancing",
        "visual": "queue-balance",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "traffic",
            "label": "traffic",
            "min": 0.4,
            "max": 2.8,
            "step": 0.05,
            "value": 1.3
          },
          {
            "kind": "range",
            "id": "power",
            "label": "server skew",
            "min": 0.6,
            "max": 2.4,
            "step": 0.05,
            "value": 1.2
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reroute"
          }
        ],
        "defaultPreset": {
          "traffic": 1.3,
          "power": 1.2
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "load-balancing:module-02",
        "articleId": "load-balancing",
        "moduleId": "module-02",
        "index": 2,
        "title": "Visualising the problem",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Visualising the problem within Load Balancing using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, playback/scrub",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection",
        "renderer": "canvas",
        "family": "load-balancing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "load-balancing:module-03",
        "articleId": "load-balancing",
        "moduleId": "module-03",
        "index": 3,
        "title": "When round robin doesn't cut it",
        "kind": "interactive simulation/diagram module",
        "description": "The result is very similar to the initial weighted round robin simulation, but there's no need to specify the weight of each server up front.",
        "controlsSummary": "slider/range, playback/scrub",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "load-balancing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "load-balancing:module-04",
        "articleId": "load-balancing",
        "moduleId": "module-04",
        "index": 4,
        "title": "Improving on round robin",
        "kind": "interactive simulation/diagram module",
        "description": "The result is very similar to the initial weighted round robin simulation, but there's no need to specify the weight of each server up front.",
        "controlsSummary": "slider/range, playback/scrub",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "load-balancing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "load-balancing:module-05",
        "articleId": "load-balancing",
        "moduleId": "module-05",
        "index": 5,
        "title": "Moving away from round robin",
        "kind": "interactive simulation/diagram module",
        "description": "The result is very similar to the initial weighted round robin simulation, but there's no need to specify the weight of each server up front.",
        "controlsSummary": "slider/range, playback/scrub",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "load-balancing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "load-balancing:module-06",
        "articleId": "load-balancing",
        "moduleId": "module-06",
        "index": 6,
        "title": "Optimizing for latency",
        "kind": "interactive simulation/diagram module",
        "description": "Simulates request routing across servers to compare balancing strategies under variable load and service times.",
        "controlsSummary": "slider/range, playback/scrub",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection",
        "renderer": "canvas",
        "family": "load-balancing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "load-balancing:module-07",
        "articleId": "load-balancing",
        "moduleId": "module-07",
        "index": 7,
        "title": "One last algorithm",
        "kind": "algorithm walkthrough module",
        "description": "Let's see this in action in a similarly complex simulation, the same parameters we gave the dynamic weighted round robin algorithm above.",
        "controlsSummary": "slider/range, playback/scrub",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "load-balancing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "load-balancing:module-08",
        "articleId": "load-balancing",
        "moduleId": "module-08",
        "index": 8,
        "title": "Conclusion",
        "kind": "reference/narrative section",
        "description": "Narrative/reference section in Load Balancing that summarizes results and links supporting resources.",
        "controlsSummary": "slider/range, playback/scrub",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection",
        "renderer": "canvas",
        "family": "load-balancing",
        "visual": "projection-lab",
        "layout": "note",
        "noteOnly": true,
        "controls": [],
        "defaultPreset": {},
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "load-balancing:module-09",
        "articleId": "load-balancing",
        "moduleId": "module-09",
        "index": 9,
        "title": "Playground",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Playground within Load Balancing using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, playback/scrub",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection",
        "renderer": "canvas",
        "family": "load-balancing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "load-balancing:module-10",
        "articleId": "load-balancing",
        "moduleId": "module-10",
        "index": 10,
        "title": "In the following simulation, requests aren't equally expensive",
        "kind": "interactive simulation/diagram module",
        "description": "In the following simulation, requests aren't equally expensive.",
        "controlsSummary": "implicit controls",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "load-balancing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "load-balancing:module-11",
        "articleId": "load-balancing",
        "moduleId": "module-11",
        "index": 11,
        "title": "If you watch the above simulation long enough,",
        "kind": "interactive simulation/diagram module",
        "description": "If you watch the above simulation long enough, you might notice the requests subtly changing colour.",
        "controlsSummary": "implicit controls",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "load-balancing",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "gestures": []
      },
      {
        "sceneId": "load-balancing:module-12",
        "articleId": "load-balancing",
        "moduleId": "module-12",
        "index": 12,
        "title": "In the next simulation we also vary the",
        "kind": "interactive simulation/diagram module",
        "description": "In the next simulation we also vary the power of each server , which is represented visually with a darker shade of grey.",
        "controlsSummary": "implicit controls",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "load-balancing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "load-balancing:module-13",
        "articleId": "load-balancing",
        "moduleId": "module-13",
        "index": 13,
        "title": "In this simulation, we use each server's known",
        "kind": "interactive simulation/diagram module",
        "description": "In this simulation, we use each server's known power value as its weight, and we give more powerful servers more requests as we loop through them.",
        "controlsSummary": "implicit controls",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "load-balancing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "load-balancing:module-14",
        "articleId": "load-balancing",
        "moduleId": "module-14",
        "index": 14,
        "title": "The following simulation uses randomised values, so feel",
        "kind": "interactive simulation/diagram module",
        "description": "The following simulation uses randomised values, so feel free to refresh the page a few times to see it adapt to new variants.",
        "controlsSummary": "implicit controls",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "load-balancing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "load-balancing:module-15",
        "articleId": "load-balancing",
        "moduleId": "module-15",
        "index": 15,
        "title": "Higher percentiles will always be higher on the",
        "kind": "chart/plot module",
        "description": "Higher percentiles will always be higher on the graph.",
        "controlsSummary": "implicit controls",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "load-balancing",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": []
      },
      {
        "sceneId": "load-balancing:module-16",
        "articleId": "load-balancing",
        "moduleId": "module-16",
        "index": 16,
        "title": "The following is a graph of cumulative requests",
        "kind": "chart/plot module",
        "description": "The following is a graph of cumulative requests dropped over time.",
        "controlsSummary": "implicit controls",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "load-balancing",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": []
      },
      {
        "sceneId": "load-balancing:module-17",
        "articleId": "load-balancing",
        "moduleId": "module-17",
        "index": 17,
        "title": "Below is a simulation using an algorithm called",
        "kind": "interactive simulation/diagram module",
        "description": "Below is a simulation using an algorithm called \"peak exponentially weighted moving average\" (or PEWMA).",
        "controlsSummary": "implicit controls",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "load-balancing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "load-balancing:module-18",
        "articleId": "load-balancing",
        "moduleId": "module-18",
        "index": 18,
        "title": "I've set specific parameters for this simulation that",
        "kind": "interactive simulation/diagram module",
        "description": "I've set specific parameters for this simulation that are guaranteed to exhibit an expected behaviour.",
        "controlsSummary": "implicit controls",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "load-balancing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "load-balancing:module-19",
        "articleId": "load-balancing",
        "moduleId": "module-19",
        "index": 19,
        "title": "To round this out, I leave you with",
        "kind": "interactive simulation/diagram module",
        "description": "To round this out, I leave you with a version of the simulation that lets you tweak most of the parameters in real time.",
        "controlsSummary": "implicit controls",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "load-balancing",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      }
    ]
  },
  {
    "id": "mechanical-watch",
    "title": "Mechanical Watch",
    "author": "Bartosz Ciechanowski",
    "url": "https://ciechanow.ski/mechanical-watch/",
    "lead": "Comprehensive mechanical watch teardown: mainspring power flow, escapement timing, gear trains, keyless works, and automatic winding.",
    "about": [
      "Comprehensive mechanical watch teardown: mainspring power flow, escapement timing, gear trains, keyless works, and automatic winding.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 25,
    "modules": [
      {
        "sceneId": "mechanical-watch:module-01",
        "articleId": "mechanical-watch",
        "moduleId": "module-01",
        "index": 1,
        "title": "Mechanical Watch",
        "kind": "interactive simulation/diagram module",
        "description": "You can drag the device around to change your viewing angle, and you can use the slider to peek at what’s going on inside: What you see here is known as the movement - the inner...",
        "controlsSummary": "slider/range, drag",
        "responseSummary": "parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "mechanical-watch",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "sharedGroup": "mechanical-watch-core",
        "gestures": [
          "slider/range",
          "drag"
        ]
      },
      {
        "sceneId": "mechanical-watch:module-02",
        "articleId": "mechanical-watch",
        "moduleId": "module-02",
        "index": 2,
        "title": "Power",
        "kind": "interactive simulation/diagram module",
        "description": "By default all animations in this article are enabled, but if you find them distracting, or if you want to save power, you can globally pause all the following demonstrations.",
        "controlsSummary": "play/pause",
        "responseSummary": "time progression can be paused/resumed for frame-by-frame inspection",
        "renderer": "canvas",
        "family": "mechanical-watch",
        "visual": "mainspring",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          },
          {
            "kind": "action",
            "id": "pause-toggle",
            "label": "pause motion"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "sharedGroup": "mechanical-watch-core",
        "pauseGroup": "mechanical-watch-motion",
        "gestures": [
          "play/pause"
        ]
      },
      {
        "sceneId": "mechanical-watch:module-03",
        "articleId": "mechanical-watch",
        "moduleId": "module-03",
        "index": 3,
        "title": "Gears",
        "kind": "interactive simulation/diagram module",
        "description": "In the demonstration below, you can use the slider to look at the two gears from further away: As you can see, these proportions are ridiculous - to make the red gear fit in any...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "mechanical-watch",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "sharedGroup": "mechanical-watch-core",
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "mechanical-watch:module-04",
        "articleId": "mechanical-watch",
        "moduleId": "module-04",
        "index": 4,
        "title": "Escapement",
        "kind": "interactive simulation/diagram module",
        "description": "Simulates escape wheel and pallet interaction to show lock/unlock cycles and discrete energy transfer into the oscillator.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "mechanical-watch",
        "visual": "escapement",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "sharedGroup": "mechanical-watch-core",
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "mechanical-watch:module-05",
        "articleId": "mechanical-watch",
        "moduleId": "module-05",
        "index": 5,
        "title": "Balance",
        "kind": "interactive simulation/diagram module",
        "description": "Visualizes balance wheel and hairspring oscillation, highlighting period stability and impulse timing.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "mechanical-watch",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "sharedGroup": "mechanical-watch-core",
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "mechanical-watch:module-06",
        "articleId": "mechanical-watch",
        "moduleId": "module-06",
        "index": 6,
        "title": "Mainplate",
        "kind": "interactive simulation/diagram module",
        "description": "Explodes the structural base assembly to show where bridges, pivots, and wheel arbors are constrained.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "mechanical-watch",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "sharedGroup": "mechanical-watch-core",
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "mechanical-watch:module-07",
        "articleId": "mechanical-watch",
        "moduleId": "module-07",
        "index": 7,
        "title": "Click",
        "kind": "interactive simulation/diagram module",
        "description": "This seemingly complicated problem is solved with a very simple mechanism known as the click - let’s see how it works.",
        "controlsSummary": "click/tap",
        "responseSummary": "click actions trigger state transitions or object selection",
        "renderer": "canvas",
        "family": "mechanical-watch",
        "visual": "click-ratchet",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "gestures": [
          "click/tap"
        ]
      },
      {
        "sceneId": "mechanical-watch:module-08",
        "articleId": "mechanical-watch",
        "moduleId": "module-08",
        "index": 8,
        "title": "Motion Works",
        "kind": "interactive simulation/diagram module",
        "description": "This seemingly complicated problem is solved with a very simple mechanism known as the click - let’s see how it works.",
        "controlsSummary": "click/tap",
        "responseSummary": "click actions trigger state transitions or object selection",
        "renderer": "canvas",
        "family": "mechanical-watch",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "sharedGroup": "mechanical-watch-core",
        "gestures": [
          "click/tap"
        ]
      },
      {
        "sceneId": "mechanical-watch:module-09",
        "articleId": "mechanical-watch",
        "moduleId": "module-09",
        "index": 9,
        "title": "Date",
        "kind": "interactive simulation/diagram module",
        "description": "Shows the date-complication train: date wheel indexing, jumper locking, and crown-driven increment behavior (single-step/day rollover) with visible coupling to neighboring gears.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "mechanical-watch",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "sharedGroup": "mechanical-watch-core",
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "mechanical-watch:module-10",
        "articleId": "mechanical-watch",
        "moduleId": "module-10",
        "index": 10,
        "title": "Keyless Works",
        "kind": "interactive simulation/diagram module",
        "description": "This seemingly complicated problem is solved with a very simple mechanism known as the click - let’s see how it works.",
        "controlsSummary": "click/tap",
        "responseSummary": "click actions trigger state transitions or object selection",
        "renderer": "canvas",
        "family": "mechanical-watch",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "sharedGroup": "mechanical-watch-core",
        "gestures": [
          "click/tap"
        ]
      },
      {
        "sceneId": "mechanical-watch:module-11",
        "articleId": "mechanical-watch",
        "moduleId": "module-11",
        "index": 11,
        "title": "Automatic Winding",
        "kind": "interactive simulation/diagram module",
        "description": "The click also prevents the mainspring from unwinding on its own - that’s why you can’t drag back the slider without restarting the entire simulation: The second hand on the oth...",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly; click actions trigger state transition...",
        "renderer": "canvas",
        "family": "mechanical-watch",
        "visual": "mainspring",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "sharedGroup": "mechanical-watch-core",
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "mechanical-watch:module-12",
        "articleId": "mechanical-watch",
        "moduleId": "module-12",
        "index": 12,
        "title": "The Size of it All",
        "kind": "interactive simulation/diagram module",
        "description": "In the demonstration below, you can use the slider to look at the two gears from further away: As you can see, these proportions are ridiculous - to make the red gear fit in any...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "mechanical-watch",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "sharedGroup": "mechanical-watch-core",
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "mechanical-watch:module-13",
        "articleId": "mechanical-watch",
        "moduleId": "module-13",
        "index": 13,
        "title": "Wind it midair, but as soon as you let go,",
        "kind": "interactive simulation/diagram module",
        "description": "By dragging the slider you can try to wind it midair, but as soon as you let go, it will snap back to its original shape: As you can see, this spring is quite strong and it want...",
        "controlsSummary": "slider/range, drag",
        "responseSummary": "parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "mechanical-watch",
        "visual": "mainspring",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "sharedGroup": "mechanical-watch-core",
        "gestures": [
          "slider/range",
          "drag"
        ]
      },
      {
        "sceneId": "mechanical-watch:module-14",
        "articleId": "mechanical-watch",
        "moduleId": "module-14",
        "index": 14,
        "title": "We’re holding the barrel tight, and you can turn the",
        "kind": "interactive simulation/diagram module",
        "description": "In the demonstration below, we’re holding the barrel tight, and you can turn the arbor by dragging the slider: Notice that as soon as you let go of the arbor by releasing the sl...",
        "controlsSummary": "slider/range, drag",
        "responseSummary": "parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "mechanical-watch",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "sharedGroup": "mechanical-watch-core",
        "gestures": [
          "slider/range",
          "drag"
        ]
      },
      {
        "sceneId": "mechanical-watch:module-15",
        "articleId": "mechanical-watch",
        "moduleId": "module-15",
        "index": 15,
        "title": "See how this “watch” behaves after you wind the mainspring",
        "kind": "interactive simulation/diagram module",
        "description": "You can see how this “watch” behaves after you wind the mainspring with the slider and let it go: We clearly have some work to do - the hand spins way too fast and it only does ...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "mechanical-watch",
        "visual": "mainspring",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "sharedGroup": "mechanical-watch-core",
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "mechanical-watch:module-16",
        "articleId": "mechanical-watch",
        "moduleId": "module-16",
        "index": 16,
        "title": "Control the speed of rotation of this gear train using",
        "kind": "interactive simulation/diagram module",
        "description": "You can control the speed of rotation of this gear train using the slider: The barrel acts as the first wheel , it drives the second wheel , which drives the third wheel , which...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "mechanical-watch",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "sharedGroup": "mechanical-watch-core",
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "mechanical-watch:module-17",
        "articleId": "mechanical-watch",
        "moduleId": "module-17",
        "index": 17,
        "title": "Let’s see why these properties are important by",
        "kind": "interactive simulation/diagram module",
        "description": "Let’s see why these properties are important by observing how these two components interact with each other: The escape wheel wants to rotate as indicated by the red arrow .",
        "controlsSummary": "implicit controls",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "mechanical-watch",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "sharedGroup": "mechanical-watch-core",
        "gestures": []
      },
      {
        "sceneId": "mechanical-watch:module-18",
        "articleId": "mechanical-watch",
        "moduleId": "module-18",
        "index": 18,
        "title": "You can slow things down with the slider",
        "kind": "interactive simulation/diagram module",
        "description": "In the demonstration below, you can slow things down with the slider: Let’s look at this interaction up close, as it deserves a closer attention.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "mechanical-watch",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "sharedGroup": "mechanical-watch-core",
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "mechanical-watch:module-19",
        "articleId": "mechanical-watch",
        "moduleId": "module-19",
        "index": 19,
        "title": "Click To continue developing our assembly, we firstly",
        "kind": "interactive simulation/diagram module",
        "description": "Click To continue developing our assembly, we firstly need to put a solid foundation in the form of the barrel bridge - it holds the barrel in place and provides structure for o...",
        "controlsSummary": "click/tap",
        "responseSummary": "click actions trigger state transitions or object selection",
        "renderer": "canvas",
        "family": "mechanical-watch",
        "visual": "click-ratchet",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "gestures": [
          "click/tap"
        ]
      },
      {
        "sceneId": "mechanical-watch:module-20",
        "articleId": "mechanical-watch",
        "moduleId": "module-20",
        "index": 20,
        "title": "Firstly, we put the little click in the",
        "kind": "interactive simulation/diagram module",
        "description": "Firstly, we put the little click in the opening on top of the barrel bridge : Within its limited range the click can rotate back and forth on its little axis: The second piece o...",
        "controlsSummary": "slider/range, click/tap",
        "responseSummary": "parameter values update continuously while slider position changes; click actions trigger state transitions or object selection",
        "renderer": "canvas",
        "family": "mechanical-watch",
        "visual": "click-ratchet",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "gestures": [
          "slider/range",
          "click/tap"
        ]
      },
      {
        "sceneId": "mechanical-watch:module-21",
        "articleId": "mechanical-watch",
        "moduleId": "module-21",
        "index": 21,
        "title": "When we squeeze it, it wants to pop",
        "kind": "interactive simulation/diagram module",
        "description": "When we squeeze it, it wants to pop back: We compress that click spring a little and we also put it into the barrel bridge : Notice that when we try to rotate the click , the cl...",
        "controlsSummary": "click/tap",
        "responseSummary": "click actions trigger state transitions or object selection",
        "renderer": "canvas",
        "family": "mechanical-watch",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "sharedGroup": "mechanical-watch-core",
        "gestures": [
          "click/tap"
        ]
      },
      {
        "sceneId": "mechanical-watch:module-22",
        "articleId": "mechanical-watch",
        "moduleId": "module-22",
        "index": 22,
        "title": "The gaps in the crown wheel allow the",
        "kind": "interactive simulation/diagram module",
        "description": "The gaps in the crown wheel allow the little post on the click to fall between the crown wheel’s teeth.",
        "controlsSummary": "click/tap",
        "responseSummary": "click actions trigger state transitions or object selection",
        "renderer": "canvas",
        "family": "mechanical-watch",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "sharedGroup": "mechanical-watch-core",
        "gestures": [
          "click/tap"
        ]
      },
      {
        "sceneId": "mechanical-watch:module-23",
        "articleId": "mechanical-watch",
        "moduleId": "module-23",
        "index": 23,
        "title": "Notice how the teeth of the crown wheel",
        "kind": "interactive simulation/diagram module",
        "description": "Notice how the teeth of the crown wheel end up pushing the click away, but it snaps back as soon as there is some space: When the click snaps back and hits the crown wheel , it ...",
        "controlsSummary": "click/tap",
        "responseSummary": "click actions trigger state transitions or object selection",
        "renderer": "canvas",
        "family": "mechanical-watch",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "sharedGroup": "mechanical-watch-core",
        "gestures": [
          "click/tap"
        ]
      },
      {
        "sceneId": "mechanical-watch:module-24",
        "articleId": "mechanical-watch",
        "moduleId": "module-24",
        "index": 24,
        "title": "Notice how the crown wheel’s teeth jam with the click",
        "kind": "interactive simulation/diagram module",
        "description": "In the simulation below, notice how the crown wheel’s teeth jam with the click , preventing the crown wheel’s rotation: This simple mechanism allows us to wind the mainspring by...",
        "controlsSummary": "click/tap",
        "responseSummary": "click actions trigger state transitions or object selection",
        "renderer": "canvas",
        "family": "mechanical-watch",
        "visual": "click-ratchet",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "gestures": [
          "click/tap"
        ]
      },
      {
        "sceneId": "mechanical-watch:module-25",
        "articleId": "mechanical-watch",
        "moduleId": "module-25",
        "index": 25,
        "title": "The slider lets you control the speed of",
        "kind": "interactive simulation/diagram module",
        "description": "The slider lets you control the speed of flowing time so that you don’t have to wait too patiently to see hands change their position: The hour hand itself needs to rotate 12 ti...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "mechanical-watch",
        "visual": "mechanical-train",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "sharedGroup": "mechanical-watch-core",
        "gestures": [
          "slider/range"
        ]
      }
    ]
  },
  {
    "id": "memory-allocation",
    "title": "Memory Allocation",
    "author": "Sam Rose",
    "url": "https://samwho.dev/memory-allocation/",
    "lead": "Allocator internals walkthrough from naive malloc/free to fragmentation and bookkeeping, with timeline-driven memory visualizations.",
    "about": [
      "Allocator internals walkthrough from naive malloc/free to fragmentation and bookkeeping, with timeline-driven memory visualizations.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 16,
    "modules": [
      {
        "sceneId": "memory-allocation:module-01",
        "articleId": "memory-allocation",
        "moduleId": "module-01",
        "index": 1,
        "title": "Memory Allocation",
        "kind": "interactive simulation/diagram module",
        "description": "Visualizes allocator state transitions (allocate/free/fragmentation) over time with deterministic timeline controls.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "svg",
        "family": "memory-allocation",
        "visual": "memory-fragmentation",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "request",
            "label": "request",
            "min": 1,
            "max": 8,
            "step": 1,
            "value": 4
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "repack"
          }
        ],
        "defaultPreset": {
          "request": 4
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "memory-allocation:module-02",
        "articleId": "memory-allocation",
        "moduleId": "module-02",
        "index": 2,
        "title": "malloc and free",
        "kind": "interactive simulation/diagram module",
        "description": "The ticks along the slider represent calls to malloc and free .",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "svg",
        "family": "memory-allocation",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "memory-allocation:module-03",
        "articleId": "memory-allocation",
        "moduleId": "module-03",
        "index": 3,
        "title": "What is memory?",
        "kind": "interactive simulation/diagram module",
        "description": "Visualizes allocator state transitions (allocate/free/fragmentation) over time with deterministic timeline controls.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "svg",
        "family": "memory-allocation",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "memory-allocation:module-04",
        "articleId": "memory-allocation",
        "moduleId": "module-04",
        "index": 4,
        "title": "The simplest malloc",
        "kind": "interactive simulation/diagram module",
        "description": "The ticks along the slider represent calls to malloc and free .",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "svg",
        "family": "memory-allocation",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "memory-allocation:module-05",
        "articleId": "memory-allocation",
        "moduleId": "module-05",
        "index": 5,
        "title": "The simplest general-purpose malloc",
        "kind": "interactive simulation/diagram module",
        "description": "The ticks along the slider represent calls to malloc and free .",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "svg",
        "family": "memory-allocation",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "memory-allocation:module-06",
        "articleId": "memory-allocation",
        "moduleId": "module-06",
        "index": 6,
        "title": "Fragmentation",
        "kind": "interactive simulation/diagram module",
        "description": "Visualizes allocator state transitions (allocate/free/fragmentation) over time with deterministic timeline controls.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "svg",
        "family": "memory-allocation",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "memory-allocation:module-07",
        "articleId": "memory-allocation",
        "moduleId": "module-07",
        "index": 7,
        "title": "A quick malloc puzzle",
        "kind": "interactive simulation/diagram module",
        "description": "The ticks along the slider represent calls to malloc and free .",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "svg",
        "family": "memory-allocation",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "memory-allocation:module-08",
        "articleId": "memory-allocation",
        "moduleId": "module-08",
        "index": 8,
        "title": "Inline bookkeeping",
        "kind": "interactive simulation/diagram module",
        "description": "This is where the seemingly wasteful bookkeeping comes into play.",
        "controlsSummary": "play/pause",
        "responseSummary": "time progression can be paused/resumed for frame-by-frame inspection",
        "renderer": "svg",
        "family": "memory-allocation",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "pauseGroup": "memory-allocation-motion",
        "gestures": [
          "play/pause"
        ]
      },
      {
        "sceneId": "memory-allocation:module-09",
        "articleId": "memory-allocation",
        "moduleId": "module-09",
        "index": 9,
        "title": "Playground",
        "kind": "interactive simulation/diagram module",
        "description": "# Playground If you're keen to take your new found knowledge and try your hand at writing your own allocators, you can click here to go to my allocator playground.",
        "controlsSummary": "click/tap",
        "responseSummary": "click actions trigger state transitions or object selection",
        "renderer": "svg",
        "family": "memory-allocation",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "click/tap"
        ]
      },
      {
        "sceneId": "memory-allocation:module-10",
        "articleId": "memory-allocation",
        "moduleId": "module-10",
        "index": 10,
        "title": "Conclusion",
        "kind": "reference/narrative section",
        "description": "Narrative/reference section in Memory Allocation that summarizes results and links supporting resources.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "svg",
        "family": "memory-allocation",
        "visual": "projection-lab",
        "layout": "note",
        "noteOnly": true,
        "controls": [],
        "defaultPreset": {},
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "memory-allocation:module-11",
        "articleId": "memory-allocation",
        "moduleId": "module-11",
        "index": 11,
        "title": "Acknowledgments",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Acknowledgments within Memory Allocation using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "svg",
        "family": "memory-allocation",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "memory-allocation:module-12",
        "articleId": "memory-allocation",
        "moduleId": "module-12",
        "index": 12,
        "title": "You'll notice there's now a slider",
        "kind": "interactive simulation/diagram module",
        "description": "You'll notice there's now a slider.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "svg",
        "family": "memory-allocation",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "memory-allocation:module-13",
        "articleId": "memory-allocation",
        "moduleId": "module-13",
        "index": 13,
        "title": "Dragging the slider to the right advances time",
        "kind": "interactive simulation/diagram module",
        "description": "Dragging the slider to the right advances time forward, and dragging it left rewinds.",
        "controlsSummary": "slider/range, drag",
        "responseSummary": "parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "svg",
        "family": "memory-allocation",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag"
        ]
      },
      {
        "sceneId": "memory-allocation:module-14",
        "articleId": "memory-allocation",
        "moduleId": "module-14",
        "index": 14,
        "title": "Click anywhere on the grid and then use the arrow",
        "kind": "interactive simulation/diagram module",
        "description": "You can also click anywhere on the grid and then use the arrow keys on your keyboard, or you can use the left and right buttons.",
        "controlsSummary": "click/tap, keyboard",
        "responseSummary": "click actions trigger state transitions or object selection; keyboard shortcuts provide alternate input path for interaction; vector arrows refresh to reflect direction/magnitud...",
        "renderer": "svg",
        "family": "memory-allocation",
        "visual": "click-ratchet",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "gestures": [
          "click/tap"
        ]
      },
      {
        "sceneId": "memory-allocation:module-15",
        "articleId": "memory-allocation",
        "moduleId": "module-15",
        "index": 15,
        "title": "Move the slider below to see a comparison",
        "kind": "interactive simulation/diagram module",
        "description": "Move the slider below to see a comparison between decimal numbers and hexadecimal numbers.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "svg",
        "family": "memory-allocation",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "memory-allocation:module-16",
        "articleId": "memory-allocation",
        "moduleId": "module-16",
        "index": 16,
        "title": "Have a think about this before playing with",
        "kind": "interactive simulation/diagram module",
        "description": "Have a think about this before playing with the slider below.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "svg",
        "family": "memory-allocation",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      }
    ]
  },
  {
    "id": "naval-architecture",
    "title": "Naval Architecture",
    "author": "Bartosz Ciechanowski",
    "url": "https://ciechanow.ski/naval-architecture/",
    "lead": "Naval architecture explainer covering buoyancy, hull form, stability, free-surface effects, waves, and propulsion force decomposition.",
    "about": [
      "Naval architecture explainer covering buoyancy, hull form, stability, free-surface effects, waves, and propulsion force decomposition.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 22,
    "modules": [
      {
        "sceneId": "naval-architecture:module-01",
        "articleId": "naval-architecture",
        "moduleId": "module-01",
        "index": 1,
        "title": "Naval Architecture",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Naval Architecture within Naval Architecture using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "naval-architecture",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "naval-architecture:module-02",
        "articleId": "naval-architecture",
        "moduleId": "module-02",
        "index": 2,
        "title": "Pressure",
        "kind": "interactive simulation/diagram module",
        "description": "You can drag the block around to see all the pressure forces acting on it: The pressure P T on top of the brick acting on the top surface area A exerts the force F T equal to: F...",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "naval-architecture",
        "visual": "pressure-map",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "angle",
            "label": "angle",
            "min": -18,
            "max": 22,
            "step": 1,
            "value": 4
          },
          {
            "kind": "range",
            "id": "speed",
            "label": "flow speed",
            "min": 0.4,
            "max": 2.8,
            "step": 0.05,
            "value": 1.3
          },
          {
            "kind": "range",
            "id": "detail",
            "label": "detail",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "angle": 4,
          "speed": 1.3,
          "detail": 0.55
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "naval-architecture:module-03",
        "articleId": "naval-architecture",
        "moduleId": "module-03",
        "index": 3,
        "title": "Buoyancy",
        "kind": "interactive simulation/diagram module",
        "description": "You can drag the block around to see all the pressure forces acting on it: The pressure P T on top of the brick acting on the top surface area A exerts the force F T equal to: F...",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "naval-architecture",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "naval-architecture:module-04",
        "articleId": "naval-architecture",
        "moduleId": "module-04",
        "index": 4,
        "title": "Hull",
        "kind": "interactive simulation/diagram module",
        "description": "You can drag it around to change the point of view: This hull is covered with a deck , but some smaller boats may have an open top.",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "naval-architecture",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "naval-architecture:module-05",
        "articleId": "naval-architecture",
        "moduleId": "module-05",
        "index": 5,
        "title": "Stability",
        "kind": "interactive simulation/diagram module",
        "description": "Explores stable vs unstable configurations by perturbing the system and observing return/divergence behavior.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "naval-architecture",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "naval-architecture:module-06",
        "articleId": "naval-architecture",
        "moduleId": "module-06",
        "index": 6,
        "title": "Cargo",
        "kind": "interactive simulation/diagram module",
        "description": "Shows ship hydrostatics and dynamics, including buoyancy, righting behavior, and propulsion force decomposition.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "naval-architecture",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "naval-architecture:module-07",
        "articleId": "naval-architecture",
        "moduleId": "module-07",
        "index": 7,
        "title": "Free Surface",
        "kind": "interactive simulation/diagram module",
        "description": "You can drag the block around to see all the pressure forces acting on it: The pressure P T on top of the brick acting on the top surface area A exerts the force F T equal to: F...",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "naval-architecture",
        "visual": "curve-surface",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "naval-architecture:module-08",
        "articleId": "naval-architecture",
        "moduleId": "module-08",
        "index": 8,
        "title": "Waves",
        "kind": "interactive simulation/diagram module",
        "description": "The slider controls the amplitude of the waves: Notice that as the wave passes through it changes the size and position of the underwater volume of the hull, which in turn shift...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "naval-architecture",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "naval-architecture:module-09",
        "articleId": "naval-architecture",
        "moduleId": "module-09",
        "index": 9,
        "title": "Propulsion",
        "kind": "interactive simulation/diagram module",
        "description": "Shows ship hydrostatics and dynamics, including buoyancy, righting behavior, and propulsion force decomposition.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "naval-architecture",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "naval-architecture:module-10",
        "articleId": "naval-architecture",
        "moduleId": "module-10",
        "index": 10,
        "title": "Further Watching and Reading",
        "kind": "reference/narrative section",
        "description": "Narrative/reference section in Naval Architecture that summarizes results and links supporting resources.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "naval-architecture",
        "visual": "mechanical-train",
        "layout": "note",
        "noteOnly": true,
        "controls": [],
        "defaultPreset": {},
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "naval-architecture:module-11",
        "articleId": "naval-architecture",
        "moduleId": "module-11",
        "index": 11,
        "title": "Final Words",
        "kind": "reference/narrative section",
        "description": "Narrative/reference section in Naval Architecture that summarizes results and links supporting resources.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "naval-architecture",
        "visual": "projection-lab",
        "layout": "note",
        "noteOnly": true,
        "controls": [],
        "defaultPreset": {},
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "naval-architecture:module-12",
        "articleId": "naval-architecture",
        "moduleId": "module-12",
        "index": 12,
        "title": "Dunk it into water using the slider: From this point",
        "kind": "interactive simulation/diagram module",
        "description": "You can dunk it into water using the slider: From this point on I’ll remove the constraints of containers and we’ll instead move outdoors where we’ll submerge things into vast, ...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "naval-architecture",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "naval-architecture:module-13",
        "articleId": "naval-architecture",
        "moduleId": "module-13",
        "index": 13,
        "title": "Drag the simulation around to see it from different angles:",
        "kind": "interactive simulation/diagram module",
        "description": "You can drag the simulation around to see it from different angles: Notice how quickly a group of blocks starts to resemble the smooth shape of the sphere.",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "naval-architecture",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "naval-architecture:module-14",
        "articleId": "naval-architecture",
        "moduleId": "module-14",
        "index": 14,
        "title": "This hull has a bulbous bow which is",
        "kind": "interactive simulation/diagram module",
        "description": "This hull has a bulbous bow which is the “nose” in the front bottom part - for larger ships it improves the flow around the ship, reducing drag.",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "naval-architecture",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "naval-architecture:module-15",
        "articleId": "naval-architecture",
        "moduleId": "module-15",
        "index": 15,
        "title": "Other than drag considerations, it may seem that",
        "kind": "interactive simulation/diagram module",
        "description": "Other than drag considerations, it may seem that the shape of the hull can be more or less arbitrary.",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "naval-architecture",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "naval-architecture:module-16",
        "articleId": "naval-architecture",
        "moduleId": "module-16",
        "index": 16,
        "title": "The first slider controls the wind, which will tilt the",
        "kind": "interactive simulation/diagram module",
        "description": "In the demonstration below, the first slider controls the wind, which will tilt the ship one way or another.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "naval-architecture",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "naval-architecture:module-17",
        "articleId": "naval-architecture",
        "moduleId": "module-17",
        "index": 17,
        "title": "The second slider changes the proportions of the",
        "kind": "interactive simulation/diagram module",
        "description": "The second slider changes the proportions of the hull: For relatively wider shapes the ship tilts a little due to wind , but it finds its stable position and will return back to...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "naval-architecture",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "naval-architecture:module-18",
        "articleId": "naval-architecture",
        "moduleId": "module-18",
        "index": 18,
        "title": "The curly arrow at the top shows the",
        "kind": "interactive simulation/diagram module",
        "description": "The curly arrow at the top shows the direction of the turn.",
        "controlsSummary": "implicit controls",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "naval-architecture",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "naval-architecture:module-19",
        "articleId": "naval-architecture",
        "moduleId": "module-19",
        "index": 19,
        "title": "We can visualize the length of the righting",
        "kind": "chart/plot module",
        "description": "We can visualize the length of the righting arm for different heel angles of the hull using the following plot.",
        "controlsSummary": "implicit controls",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "naval-architecture",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": []
      },
      {
        "sceneId": "naval-architecture:module-20",
        "articleId": "naval-architecture",
        "moduleId": "module-20",
        "index": 20,
        "title": "The slider controls the horizontal position of the",
        "kind": "interactive simulation/diagram module",
        "description": "The slider controls the horizontal position of the heavy box : Once again, the ship will find its static equilibrium at some angle, known as angle of list , which this time is c...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "naval-architecture",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "naval-architecture:module-21",
        "articleId": "naval-architecture",
        "moduleId": "module-21",
        "index": 21,
        "title": "The sum of all these forces is shown",
        "kind": "interactive simulation/diagram module",
        "description": "The sum of all these forces is shown with the yellow arrow and the induced swirl is depicted with the red arrow : When the blades are oriented sideways they push a lot of water,...",
        "controlsSummary": "implicit controls",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "naval-architecture",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "naval-architecture:module-22",
        "articleId": "naval-architecture",
        "moduleId": "module-22",
        "index": 22,
        "title": "In this very simplified analysis we seem to",
        "kind": "interactive simulation/diagram module",
        "description": "In this very simplified analysis we seem to achieve the largest thrust roughly in the middle between the two extremes, but notice that we still have a relatively large drag indu...",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "naval-architecture",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "drag"
        ]
      }
    ]
  },
  {
    "id": "reading-qr-codes-without-a-computer",
    "title": "Reading QR codes without a computer!",
    "author": "blinry",
    "url": "https://qr.blinry.org/",
    "lead": "Stepwise QR decoding tutorial that walks users from visible modules to payload extraction without relying on automatic scanner black boxes.",
    "about": [
      "Stepwise QR decoding tutorial that walks users from visible modules to payload extraction without relying on automatic scanner black boxes.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 5,
    "modules": [
      {
        "sceneId": "reading-qr-codes-without-a-computer:module-01",
        "articleId": "reading-qr-codes-without-a-computer",
        "moduleId": "module-01",
        "index": 1,
        "title": "QR structure map",
        "kind": "interactive simulation/diagram module",
        "description": "Highlights finder, timing, alignment, and data regions so users can see the physical layout of a QR symbol.",
        "controlsSummary": "step navigation, click/tap",
        "responseSummary": "selected region is highlighted and explained in context",
        "renderer": "canvas",
        "family": "reading-qr-codes-without-a-computer",
        "visual": "qr-grid",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "click/tap"
        ]
      },
      {
        "sceneId": "reading-qr-codes-without-a-computer:module-02",
        "articleId": "reading-qr-codes-without-a-computer",
        "moduleId": "module-02",
        "index": 2,
        "title": "Mask and format decoding panel",
        "kind": "algorithm walkthrough module",
        "description": "Explains how format bits encode error correction and mask patterns, then applies mask logic.",
        "controlsSummary": "step navigation, toggle",
        "responseSummary": "module grid updates from masked to unmasked state",
        "renderer": "canvas",
        "family": "reading-qr-codes-without-a-computer",
        "visual": "qr-grid",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "reading-qr-codes-without-a-computer:module-03",
        "articleId": "reading-qr-codes-without-a-computer",
        "moduleId": "module-03",
        "index": 3,
        "title": "Data bit extraction path",
        "kind": "interactive simulation/diagram module",
        "description": "Shows traversal order through data modules and conversion from modules to bitstream.",
        "controlsSummary": "playback controls, step buttons",
        "responseSummary": "current read position advances and extracted bitstream grows",
        "renderer": "canvas",
        "family": "reading-qr-codes-without-a-computer",
        "visual": "qr-grid",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "reading-qr-codes-without-a-computer:module-04",
        "articleId": "reading-qr-codes-without-a-computer",
        "moduleId": "module-04",
        "index": 4,
        "title": "Error-correction walkthrough",
        "kind": "algorithm walkthrough module",
        "description": "Demonstrates Reed-Solomon style correction conceptually for damaged or uncertain modules.",
        "controlsSummary": "step controls",
        "responseSummary": "corrected bytes and confidence indicators update per correction step",
        "renderer": "canvas",
        "family": "reading-qr-codes-without-a-computer",
        "visual": "qr-grid",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "reading-qr-codes-without-a-computer:module-05",
        "articleId": "reading-qr-codes-without-a-computer",
        "moduleId": "module-05",
        "index": 5,
        "title": "Payload reconstruction panel",
        "kind": "interactive simulation/diagram module",
        "description": "Maps decoded bytes to text/message content so users can verify final decode result manually.",
        "controlsSummary": "step controls",
        "responseSummary": "decoded message output updates as more blocks are processed",
        "renderer": "canvas",
        "family": "reading-qr-codes-without-a-computer",
        "visual": "qr-grid",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      }
    ]
  },
  {
    "id": "rigid-body-collisions",
    "title": "Rigid Body Collisions",
    "author": "Kai Sassnowski",
    "url": "https://www.sassnow.ski/rigid-body-collisions/1",
    "lead": "Physics/math explainer for 2D rigid-body collision resolution with vector geometry, normals, and relative-velocity intuition.",
    "about": [
      "Physics/math explainer for 2D rigid-body collision resolution with vector geometry, normals, and relative-velocity intuition.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 22,
    "modules": [
      {
        "sceneId": "rigid-body-collisions:module-01",
        "articleId": "rigid-body-collisions",
        "moduleId": "module-01",
        "index": 1,
        "title": "2D Rigid Body Collision Resolution Part 1: Defining the problem",
        "kind": "interactive simulation/diagram module",
        "description": "Rigid bodies The specific kind of physics simulation we are going to cover is called rigid body physics .",
        "controlsSummary": "slider/range, click/tap, playback/scrub",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "rigid-body-collisions",
        "visual": "collision-resolve",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "click/tap"
        ]
      },
      {
        "sceneId": "rigid-body-collisions:module-02",
        "articleId": "rigid-body-collisions",
        "moduleId": "module-02",
        "index": 2,
        "title": "Before we start",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Before we start within Rigid Body Collisions using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, click/tap, playback/scrub",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; click/tap actions switch state, select entities, or trigger discrete events; play/pause controls time...",
        "renderer": "canvas",
        "family": "rigid-body-collisions",
        "visual": "collision-resolve",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "click/tap"
        ]
      },
      {
        "sceneId": "rigid-body-collisions:module-03",
        "articleId": "rigid-body-collisions",
        "moduleId": "module-03",
        "index": 3,
        "title": "Rigid bodies",
        "kind": "interactive simulation/diagram module",
        "description": "Rigid bodies The specific kind of physics simulation we are going to cover is called rigid body physics .",
        "controlsSummary": "slider/range, click/tap, playback/scrub",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "rigid-body-collisions",
        "visual": "collision-resolve",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "click/tap"
        ]
      },
      {
        "sceneId": "rigid-body-collisions:module-04",
        "articleId": "rigid-body-collisions",
        "moduleId": "module-04",
        "index": 4,
        "title": "Collision detection vs. collision resolution",
        "kind": "interactive simulation/diagram module",
        "description": "The goal of collision resolution is to change each object's velocity so that as the simulation progresses the objects will no longer penetrate each other.",
        "controlsSummary": "slider/range, click/tap, playback/scrub",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "rigid-body-collisions",
        "visual": "collision-resolve",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "click/tap"
        ]
      },
      {
        "sceneId": "rigid-body-collisions:module-05",
        "articleId": "rigid-body-collisions",
        "moduleId": "module-05",
        "index": 5,
        "title": "What are we trying to do?",
        "kind": "interactive simulation/diagram module",
        "description": "Explains What are we trying to do? within Rigid Body Collisions using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, click/tap, playback/scrub",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; click/tap actions switch state, select entities, or trigger discrete events; play/pause controls time...",
        "renderer": "canvas",
        "family": "rigid-body-collisions",
        "visual": "collision-resolve",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "click/tap"
        ]
      },
      {
        "sceneId": "rigid-body-collisions:module-06",
        "articleId": "rigid-body-collisions",
        "moduleId": "module-06",
        "index": 6,
        "title": "What is a collision?",
        "kind": "interactive simulation/diagram module",
        "description": "The goal of collision resolution is to change each object's velocity so that as the simulation progresses the objects will no longer penetrate each other.",
        "controlsSummary": "slider/range, click/tap, playback/scrub",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "rigid-body-collisions",
        "visual": "collision-resolve",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "click/tap"
        ]
      },
      {
        "sceneId": "rigid-body-collisions:module-07",
        "articleId": "rigid-body-collisions",
        "moduleId": "module-07",
        "index": 7,
        "title": "Towards a definition",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Towards a definition within Rigid Body Collisions using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, click/tap, playback/scrub",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; click/tap actions switch state, select entities, or trigger discrete events; play/pause controls time...",
        "renderer": "canvas",
        "family": "rigid-body-collisions",
        "visual": "collision-resolve",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "click/tap"
        ]
      },
      {
        "sceneId": "rigid-body-collisions:module-08",
        "articleId": "rigid-body-collisions",
        "moduleId": "module-08",
        "index": 8,
        "title": "Surface normals",
        "kind": "interactive simulation/diagram module",
        "description": "Uses control-point manipulation to show how parametric curves/surfaces change shape and continuity.",
        "controlsSummary": "slider/range, click/tap, playback/scrub",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; click/tap actions switch state, select entities, or trigger discrete events; play/pause controls time...",
        "renderer": "canvas",
        "family": "rigid-body-collisions",
        "visual": "collision-resolve",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "click/tap"
        ]
      },
      {
        "sceneId": "rigid-body-collisions:module-09",
        "articleId": "rigid-body-collisions",
        "moduleId": "module-09",
        "index": 9,
        "title": "The dot product",
        "kind": "interactive simulation/diagram module",
        "description": "Demonstrates collision geometry and relative-velocity tests, linking vector math directly to contact outcomes.",
        "controlsSummary": "slider/range, click/tap, playback/scrub",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; click/tap actions switch state, select entities, or trigger discrete events; play/pause controls time...",
        "renderer": "canvas",
        "family": "rigid-body-collisions",
        "visual": "collision-resolve",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "click/tap"
        ]
      },
      {
        "sceneId": "rigid-body-collisions:module-10",
        "articleId": "rigid-body-collisions",
        "moduleId": "module-10",
        "index": 10,
        "title": "Tying it all together",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Tying it all together within Rigid Body Collisions using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, click/tap, playback/scrub",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; click/tap actions switch state, select entities, or trigger discrete events; play/pause controls time...",
        "renderer": "canvas",
        "family": "rigid-body-collisions",
        "visual": "collision-resolve",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "click/tap"
        ]
      },
      {
        "sceneId": "rigid-body-collisions:module-11",
        "articleId": "rigid-body-collisions",
        "moduleId": "module-11",
        "index": 11,
        "title": "Conclusion",
        "kind": "reference/narrative section",
        "description": "Narrative/reference section in Rigid Body Collisions that summarizes results and links supporting resources.",
        "controlsSummary": "slider/range, click/tap, playback/scrub",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; click/tap actions switch state, select entities, or trigger discrete events; play/pause controls time...",
        "renderer": "canvas",
        "family": "rigid-body-collisions",
        "visual": "collision-resolve",
        "layout": "note",
        "noteOnly": true,
        "controls": [],
        "defaultPreset": {},
        "gestures": [
          "slider/range",
          "click/tap"
        ]
      },
      {
        "sceneId": "rigid-body-collisions:module-12",
        "articleId": "rigid-body-collisions",
        "moduleId": "module-12",
        "index": 12,
        "title": "In this series of blog posts, I want",
        "kind": "interactive simulation/diagram module",
        "description": "In this series of blog posts, I want to show you what actually goes on behind the scenes in a physics simulation like the one above.",
        "controlsSummary": "implicit controls",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "rigid-body-collisions",
        "visual": "collision-resolve",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "rigid-body-collisions:module-13",
        "articleId": "rigid-body-collisions",
        "moduleId": "module-13",
        "index": 13,
        "title": "We can represent an object's current velocity with",
        "kind": "interactive simulation/diagram module",
        "description": "We can represent an object's current velocity with an arrow where the length of the arrow represents the object's current speed and the direction the arrow is pointing its trave...",
        "controlsSummary": "implicit controls",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "rigid-body-collisions",
        "visual": "collision-resolve",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "rigid-body-collisions:module-14",
        "articleId": "rigid-body-collisions",
        "moduleId": "module-14",
        "index": 14,
        "title": "You can change the box's velocity by dragging the arrow",
        "kind": "interactive simulation/diagram module",
        "description": "In the demonstration below, you can change the box's velocity by dragging the arrow around.",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly; vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "rigid-body-collisions",
        "visual": "collision-resolve",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "rigid-body-collisions:module-15",
        "articleId": "rigid-body-collisions",
        "moduleId": "module-15",
        "index": 15,
        "title": "Always reset the simulation with the button",
        "kind": "interactive simulation/diagram module",
        "description": "If you ever get lost in space, you can always reset the simulation with the button.",
        "controlsSummary": "reset/restart",
        "responseSummary": "reset/restart returns simulation to deterministic initial state",
        "renderer": "canvas",
        "family": "rigid-body-collisions",
        "visual": "collision-resolve",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "rigid-body-collisions:module-16",
        "articleId": "rigid-body-collisions",
        "moduleId": "module-16",
        "index": 16,
        "title": "Whenever you see a little arrow over a",
        "kind": "interactive simulation/diagram module",
        "description": "Whenever you see a little arrow over a variable like this s ⃗ \\vec{s} s , this means that the variable is a vector.",
        "controlsSummary": "implicit controls",
        "responseSummary": "vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "rigid-body-collisions",
        "visual": "collision-resolve",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "rigid-body-collisions:module-17",
        "articleId": "rigid-body-collisions",
        "moduleId": "module-17",
        "index": 17,
        "title": "By dragging the slider to progress time",
        "kind": "interactive simulation/diagram module",
        "description": "You can see this happening in the demonstration below by dragging the slider to progress time.",
        "controlsSummary": "slider/range, drag",
        "responseSummary": "parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "rigid-body-collisions",
        "visual": "collision-resolve",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag"
        ]
      },
      {
        "sceneId": "rigid-body-collisions:module-18",
        "articleId": "rigid-body-collisions",
        "moduleId": "module-18",
        "index": 18,
        "title": "Verify the result by playing the simulation",
        "kind": "interactive simulation/diagram module",
        "description": "You can verify the result by playing the simulation.",
        "controlsSummary": "implicit controls",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "rigid-body-collisions",
        "visual": "collision-resolve",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "rigid-body-collisions:module-19",
        "articleId": "rigid-body-collisions",
        "moduleId": "module-19",
        "index": 19,
        "title": "To explore this idea, let's play a little",
        "kind": "interactive simulation/diagram module",
        "description": "To explore this idea, let's play a little game.",
        "controlsSummary": "play/pause",
        "responseSummary": "time progression can be paused/resumed for frame-by-frame inspection",
        "renderer": "canvas",
        "family": "rigid-body-collisions",
        "visual": "collision-resolve",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "pauseGroup": "rigid-body-collisions-motion",
        "gestures": [
          "play/pause"
        ]
      },
      {
        "sceneId": "rigid-body-collisions:module-20",
        "articleId": "rigid-body-collisions",
        "moduleId": "module-20",
        "index": 20,
        "title": "To make things a little more challenging, the",
        "kind": "interactive simulation/diagram module",
        "description": "To make things a little more challenging, the angle of inclination of the floor is going to change every time you reset the game.",
        "controlsSummary": "reset/restart",
        "responseSummary": "reset/restart returns simulation to deterministic initial state",
        "renderer": "canvas",
        "family": "rigid-body-collisions",
        "visual": "collision-resolve",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "rigid-body-collisions:module-21",
        "articleId": "rigid-body-collisions",
        "moduleId": "module-21",
        "index": 21,
        "title": "Click on them to reveal the answers",
        "kind": "interactive simulation/diagram module",
        "description": "You can click on them to reveal the answers.",
        "controlsSummary": "click/tap",
        "responseSummary": "click actions trigger state transitions or object selection",
        "renderer": "canvas",
        "family": "rigid-body-collisions",
        "visual": "collision-resolve",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "click/tap"
        ]
      },
      {
        "sceneId": "rigid-body-collisions:module-22",
        "articleId": "rigid-body-collisions",
        "moduleId": "module-22",
        "index": 22,
        "title": "Control the angle between the vectors with the slider below",
        "kind": "interactive simulation/diagram module",
        "description": "You can control the angle between the vectors with the slider below.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes; vector arrows refresh to reflect direction/magnitude changes",
        "renderer": "canvas",
        "family": "rigid-body-collisions",
        "visual": "collision-resolve",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      }
    ]
  },
  {
    "id": "sound",
    "title": "Sound",
    "author": "Bartosz Ciechanowski",
    "url": "https://ciechanow.ski/sound/",
    "lead": "Acoustics explainer spanning particle motion, pressure waves, vibration frequency/amplitude, waveform superposition, and audible synthesis.",
    "about": [
      "Acoustics explainer spanning particle motion, pressure waves, vibration frequency/amplitude, waveform superposition, and audible synthesis.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 23,
    "modules": [
      {
        "sceneId": "sound:module-01",
        "articleId": "sound",
        "moduleId": "module-01",
        "index": 1,
        "title": "Sound",
        "kind": "interactive simulation/diagram module",
        "description": "Throughout this presentation you will be hearing different sounds, which you will often play yourself on little keyboards like the one below.",
        "controlsSummary": "play/pause",
        "responseSummary": "time progression can be paused/resumed for frame-by-frame inspection",
        "renderer": "canvas",
        "family": "sound",
        "visual": "sound-wave",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "pauseGroup": "sound-motion",
        "gestures": [
          "play/pause"
        ]
      },
      {
        "sceneId": "sound:module-02",
        "articleId": "sound",
        "moduleId": "module-02",
        "index": 2,
        "title": "Air",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Air within Sound using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "sound",
        "visual": "sound-wave",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "sound:module-03",
        "articleId": "sound",
        "moduleId": "module-03",
        "index": 3,
        "title": "Making Sounds",
        "kind": "interactive simulation/diagram module",
        "description": "Throughout this presentation you will be hearing different sounds, which you will often play yourself on little keyboards like the one below.",
        "controlsSummary": "play/pause",
        "responseSummary": "time progression can be paused/resumed for frame-by-frame inspection",
        "renderer": "canvas",
        "family": "sound",
        "visual": "sound-wave",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "pauseGroup": "sound-motion",
        "gestures": [
          "play/pause"
        ]
      },
      {
        "sceneId": "sound:module-04",
        "articleId": "sound",
        "moduleId": "module-04",
        "index": 4,
        "title": "Pure Tones",
        "kind": "interactive simulation/diagram module",
        "description": "Demonstrates acoustic vibration and pressure-wave propagation with controllable frequency/amplitude parameters.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "sound",
        "visual": "sound-wave",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "sound:module-05",
        "articleId": "sound",
        "moduleId": "module-05",
        "index": 5,
        "title": "Masses and Springs",
        "kind": "interactive simulation/diagram module",
        "description": "Demonstrates acoustic vibration and pressure-wave propagation with controllable frequency/amplitude parameters.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "sound",
        "visual": "sound-wave",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "sound:module-06",
        "articleId": "sound",
        "moduleId": "module-06",
        "index": 6,
        "title": "Pressure Waves",
        "kind": "interactive simulation/diagram module",
        "description": "In the demonstration below, you can drag the slider to change the length of the box, the plot in the bottom tracks the number of collisions per area of the box in a unit of time...",
        "controlsSummary": "slider/range, drag",
        "responseSummary": "parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly; particle/marker traces update as flow ...",
        "renderer": "canvas",
        "family": "sound",
        "visual": "pressure-map",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "angle",
            "label": "angle",
            "min": -18,
            "max": 22,
            "step": 1,
            "value": 4
          },
          {
            "kind": "range",
            "id": "speed",
            "label": "flow speed",
            "min": 0.4,
            "max": 2.8,
            "step": 0.05,
            "value": 1.3
          },
          {
            "kind": "range",
            "id": "detail",
            "label": "detail",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "angle": 4,
          "speed": 1.3,
          "detail": 0.55
        },
        "gestures": [
          "slider/range",
          "drag"
        ]
      },
      {
        "sceneId": "sound:module-07",
        "articleId": "sound",
        "moduleId": "module-07",
        "index": 7,
        "title": "Further Reading",
        "kind": "reference/narrative section",
        "description": "Narrative/reference section in Sound that summarizes results and links supporting resources.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "sound",
        "visual": "sound-wave",
        "layout": "note",
        "noteOnly": true,
        "controls": [],
        "defaultPreset": {},
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "sound:module-08",
        "articleId": "sound",
        "moduleId": "module-08",
        "index": 8,
        "title": "Final Words",
        "kind": "reference/narrative section",
        "description": "The higher the frequency the higher the perceived pitch: With these more complicated triangular shapes in place it may be a bit harder to understand how all these waveforms add ...",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "canvas",
        "family": "sound",
        "visual": "sound-wave",
        "layout": "note",
        "noteOnly": true,
        "controls": [],
        "defaultPreset": {},
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "sound:module-09",
        "articleId": "sound",
        "moduleId": "module-09",
        "index": 9,
        "title": "Either click its keys with your mouse or use W",
        "kind": "interactive simulation/diagram module",
        "description": "You can either click its keys with your mouse or use W E R keys on your computer keyboard, but before you do so make sure your system volume is at a reasonable level: You can pr...",
        "controlsSummary": "click/tap, keyboard",
        "responseSummary": "click actions trigger state transitions or object selection; keyboard shortcuts provide alternate input path for interaction",
        "renderer": "canvas",
        "family": "sound",
        "visual": "click-ratchet",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "gestures": [
          "click/tap"
        ]
      },
      {
        "sceneId": "sound:module-10",
        "articleId": "sound",
        "moduleId": "module-10",
        "index": 10,
        "title": "Drag the cube around to change the viewing angle and",
        "kind": "interactive simulation/diagram module",
        "description": "You can drag the cube around to change the viewing angle and you can also control the speed of the flow of time with the slider: I need to note that this visualization simplifie...",
        "controlsSummary": "slider/range, drag",
        "responseSummary": "parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "sound",
        "visual": "sound-wave",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag"
        ]
      },
      {
        "sceneId": "sound:module-11",
        "articleId": "sound",
        "moduleId": "module-11",
        "index": 11,
        "title": "With all the commotion in the previous simulation",
        "kind": "interactive simulation/diagram module",
        "description": "With all the commotion in the previous simulation it may have been hard to see that the air particles collide with each other.",
        "controlsSummary": "implicit controls",
        "responseSummary": "particle/marker traces update as flow state changes",
        "renderer": "canvas",
        "family": "sound",
        "visual": "sound-wave",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "sound:module-12",
        "articleId": "sound",
        "moduleId": "module-12",
        "index": 12,
        "title": "Control the speed of time with the slider: Naturally, those",
        "kind": "interactive simulation/diagram module",
        "description": "To make these events easier to see you can control the speed of time with the slider: Naturally, those particles can also collide with other things in the environment.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes; particle/marker traces update as flow state changes",
        "renderer": "canvas",
        "family": "sound",
        "visual": "sound-wave",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "sound:module-13",
        "articleId": "sound",
        "moduleId": "module-13",
        "index": 13,
        "title": "I put up walls around that parcel of air",
        "kind": "interactive simulation/diagram module",
        "description": "In the simulation below I put up walls around that parcel of air.",
        "controlsSummary": "implicit controls",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "sound",
        "visual": "sound-wave",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "sound:module-14",
        "articleId": "sound",
        "moduleId": "module-14",
        "index": 14,
        "title": "Remember that we’re observing a significantly slowed down",
        "kind": "interactive simulation/diagram module",
        "description": "Remember that we’re observing a significantly slowed down simulation.",
        "controlsSummary": "implicit controls",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "sound",
        "visual": "sound-wave",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "sound:module-15",
        "articleId": "sound",
        "moduleId": "module-15",
        "index": 15,
        "title": "Do this with a slider below: The small cube of",
        "kind": "interactive simulation/diagram module",
        "description": "All the collisions between particles also have other consequences, but to look at them I need to adjust the scale at which we’ll be looking at - you can do this with a slider be...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes; particle/marker traces update as flow state changes",
        "renderer": "canvas",
        "family": "sound",
        "visual": "sound-wave",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "sound:module-16",
        "articleId": "sound",
        "moduleId": "module-16",
        "index": 16,
        "title": "I enlarged that particle to make it visible, you can",
        "kind": "interactive simulation/diagram module",
        "description": "In the demonstration below, I enlarged that particle to make it visible, you can also control the flow of time with the slider: Due to collisions with other molecules, it may ta...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes; particle/marker traces update as flow state changes",
        "renderer": "canvas",
        "family": "sound",
        "visual": "sound-wave",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "sound:module-17",
        "articleId": "sound",
        "moduleId": "module-17",
        "index": 17,
        "title": "Although these boundaries are imaginary, they let us",
        "kind": "interactive simulation/diagram module",
        "description": "Although these boundaries are imaginary, they let us see what happens to different sections of air as you move the plate around with the slider: Notice that the individual parce...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "sound",
        "visual": "sound-wave",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "sound:module-18",
        "articleId": "sound",
        "moduleId": "module-18",
        "index": 18,
        "title": "Notice that each of the three keys moves",
        "kind": "interactive simulation/diagram module",
        "description": "Notice that each of the three keys moves the plate by a different amount, with red marker showing the total offset: Despite its simplicity, this device lets us observe a few thi...",
        "controlsSummary": "implicit controls",
        "responseSummary": "particle/marker traces update as flow state changes",
        "renderer": "canvas",
        "family": "sound",
        "visual": "sound-wave",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "sound:module-19",
        "articleId": "sound",
        "moduleId": "module-19",
        "index": 19,
        "title": "Three pops of different loudness is not much",
        "kind": "interactive simulation/diagram module",
        "description": "Three pops of different loudness is not much to create music with as this only lets us play some simple beats.",
        "controlsSummary": "play/pause",
        "responseSummary": "time progression can be paused/resumed for frame-by-frame inspection",
        "renderer": "canvas",
        "family": "sound",
        "visual": "sound-wave",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "pauseGroup": "sound-motion",
        "gestures": [
          "play/pause"
        ]
      },
      {
        "sceneId": "sound:module-20",
        "articleId": "sound",
        "moduleId": "module-20",
        "index": 20,
        "title": "You can drag the first slider to change how many",
        "kind": "interactive simulation/diagram module",
        "description": "In the demonstration below, you can drag the first slider to change how many times per second the plate should jump forwards and backwards.",
        "controlsSummary": "slider/range, drag",
        "responseSummary": "parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "sound",
        "visual": "sound-wave",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag"
        ]
      },
      {
        "sceneId": "sound:module-21",
        "articleId": "sound",
        "moduleId": "module-21",
        "index": 21,
        "title": "Control how far the plate moves with each jump using",
        "kind": "interactive simulation/diagram module",
        "description": "You can also control how far the plate moves with each jump using the second slider: To describe the frequency of vibration, I’m using the unit of hertz , often abbreviated as H...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "sound",
        "visual": "sound-wave",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "sound:module-22",
        "articleId": "sound",
        "moduleId": "module-22",
        "index": 22,
        "title": "I’m also drawing three plots corresponding to each",
        "kind": "chart/plot module",
        "description": "I’m also drawing three plots corresponding to each key , and an additional plot showing the cumulative effect of the individual motions.",
        "controlsSummary": "keyboard",
        "responseSummary": "keyboard shortcuts provide alternate input path for interaction; plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "sound",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": []
      },
      {
        "sceneId": "sound:module-23",
        "articleId": "sound",
        "moduleId": "module-23",
        "index": 23,
        "title": "The slider tracks the process of the addition",
        "kind": "interactive simulation/diagram module",
        "description": "The slider tracks the process of the addition of four different triangular shapes of different amplitude : Notice that each waveform expresses some shift from the current position.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "svg",
        "family": "sound",
        "visual": "ml-threshold",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "threshold",
            "label": "threshold",
            "min": 0.05,
            "max": 0.95,
            "step": 0.01,
            "value": 0.52
          },
          {
            "kind": "range",
            "id": "imbalance",
            "label": "imbalance",
            "min": 0.1,
            "max": 0.9,
            "step": 0.01,
            "value": 0.35
          },
          {
            "kind": "range",
            "id": "noise",
            "label": "noise",
            "min": 0,
            "max": 0.5,
            "step": 0.01,
            "value": 0.12
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset threshold"
          }
        ],
        "defaultPreset": {
          "threshold": 0.52,
          "imbalance": 0.35,
          "noise": 0.12
        },
        "gestures": [
          "slider/range"
        ]
      }
    ]
  },
  {
    "id": "tesseract",
    "title": "Tesseract",
    "author": "Bartosz Ciechanowski",
    "url": "https://ciechanow.ski/tesseract/",
    "lead": "4D geometry explainer showing how a tesseract is constructed, projected, rotated, and intersected in lower-dimensional spaces.",
    "about": [
      "4D geometry explainer showing how a tesseract is constructed, projected, rotated, and intersected in lower-dimensional spaces.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 21,
    "modules": [
      {
        "sceneId": "tesseract:module-01",
        "articleId": "tesseract",
        "moduleId": "module-01",
        "index": 1,
        "title": "Tesseract",
        "kind": "interactive simulation/diagram module",
        "description": "The slider modifies the object itself: What you’ve just interacted with was a rotated tesseract going through our three dimensional world, but before we understand why it looks ...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "tesseract",
        "visual": "curve-surface",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "tesseract:module-02",
        "articleId": "tesseract",
        "moduleId": "module-02",
        "index": 2,
        "title": "Building Cubes",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Building Cubes within Tesseract using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "tesseract",
        "visual": "curve-surface",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "tesseract:module-03",
        "articleId": "tesseract",
        "moduleId": "module-03",
        "index": 3,
        "title": "Ambiguous Representation",
        "kind": "interactive simulation/diagram module",
        "description": "You may drag the diagram around to change the viewing angle, I’ve also put a single point in that space: Similarly to the previous example the position of the black point is amb...",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "tesseract",
        "visual": "curve-surface",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "tesseract:module-04",
        "articleId": "tesseract",
        "moduleId": "module-04",
        "index": 4,
        "title": "Fourth Dimension",
        "kind": "interactive simulation/diagram module",
        "description": "The slider modifies the object itself: What you’ve just interacted with was a rotated tesseract going through our three dimensional world, but before we understand why it looks ...",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "tesseract",
        "visual": "curve-surface",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "tesseract:module-05",
        "articleId": "tesseract",
        "moduleId": "module-05",
        "index": 5,
        "title": "Stepping into the Shadows",
        "kind": "interactive simulation/diagram module",
        "description": "Simulates light transport (direction, intensity, reflection, and occlusion) to show how shading and shadows emerge.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "tesseract",
        "visual": "shadow-volume",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "tesseract:module-06",
        "articleId": "tesseract",
        "moduleId": "module-06",
        "index": 6,
        "title": "Plane of Rotation",
        "kind": "interactive simulation/diagram module",
        "description": "The slider controls the rotation of the tesseract in the xw plane.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "tesseract",
        "visual": "curve-surface",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "tesseract:module-07",
        "articleId": "tesseract",
        "moduleId": "module-07",
        "index": 7,
        "title": "In-N-Out",
        "kind": "interactive simulation/diagram module",
        "description": "Explains In-N-Out within Tesseract using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "tesseract",
        "visual": "curve-surface",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "tesseract:module-08",
        "articleId": "tesseract",
        "moduleId": "module-08",
        "index": 8,
        "title": "Leaving Plato’s Cave",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Leaving Plato’s Cave within Tesseract using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "tesseract",
        "visual": "curve-surface",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "tesseract:module-09",
        "articleId": "tesseract",
        "moduleId": "module-09",
        "index": 9,
        "title": "Further Watching and Reading",
        "kind": "reference/narrative section",
        "description": "Narrative/reference section in Tesseract that summarizes results and links supporting resources.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "tesseract",
        "visual": "mechanical-train",
        "layout": "note",
        "noteOnly": true,
        "controls": [],
        "defaultPreset": {},
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "tesseract:module-10",
        "articleId": "tesseract",
        "moduleId": "module-10",
        "index": 10,
        "title": "Final Words",
        "kind": "reference/narrative section",
        "description": "For the grand finale of this article lets drag a tesseract through a 4D space and see how it intersects with a 3D world.",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "tesseract",
        "visual": "curve-surface",
        "layout": "note",
        "noteOnly": true,
        "controls": [],
        "defaultPreset": {},
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "tesseract:module-11",
        "articleId": "tesseract",
        "moduleId": "module-11",
        "index": 11,
        "title": "Drag the object around to view it from a different",
        "kind": "interactive simulation/diagram module",
        "description": "You can drag the object around to view it from a different angle.",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "tesseract",
        "visual": "curve-surface",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "tesseract:module-12",
        "articleId": "tesseract",
        "moduleId": "module-12",
        "index": 12,
        "title": "You can take a single point and “stretch” it into",
        "kind": "interactive simulation/diagram module",
        "description": "In the demonstration below you can take a single point and “stretch” it into the next dimension by dragging the slider: We’ve just created a line segment.",
        "controlsSummary": "slider/range, drag",
        "responseSummary": "parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "tesseract",
        "visual": "curve-surface",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag"
        ]
      },
      {
        "sceneId": "tesseract:module-13",
        "articleId": "tesseract",
        "moduleId": "module-13",
        "index": 13,
        "title": "Drag it around to see it from other directions: In",
        "kind": "interactive simulation/diagram module",
        "description": "You can drag it around to see it from other directions: In a three dimensional space all three x y z axes are perpendicular to each other.",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "tesseract",
        "visual": "curve-surface",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "tesseract:module-14",
        "articleId": "tesseract",
        "moduleId": "module-14",
        "index": 14,
        "title": "Control its position with a slider: Despite the movement of",
        "kind": "interactive simulation/diagram module",
        "description": "I put a single black point in the 3D space, you can control its position with a slider: Despite the movement of the point in a 3D space its position in a 2D drawing doesn’t change.",
        "controlsSummary": "slider/range",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "canvas",
        "family": "tesseract",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "tesseract:module-15",
        "articleId": "tesseract",
        "moduleId": "module-15",
        "index": 15,
        "title": "In the simulation they’re 120° apart, but we",
        "kind": "interactive simulation/diagram module",
        "description": "In the simulation they’re 120° apart, but we know that those angles are equal to 90°.",
        "controlsSummary": "implicit controls",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "tesseract",
        "visual": "curve-surface",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "tesseract:module-16",
        "articleId": "tesseract",
        "moduleId": "module-16",
        "index": 16,
        "title": "Stretch a cube to create a tesseract: I personally find",
        "kind": "interactive simulation/diagram module",
        "description": "By dragging the slider you can stretch a cube to create a tesseract: I personally find it quite difficult to see what’s going on with this form of presentation.",
        "controlsSummary": "slider/range, drag",
        "responseSummary": "parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "tesseract",
        "visual": "curve-surface",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag"
        ]
      },
      {
        "sceneId": "tesseract:module-17",
        "articleId": "tesseract",
        "moduleId": "module-17",
        "index": 17,
        "title": "You can rotate the cube on the left side to",
        "kind": "interactive simulation/diagram module",
        "description": "In the simulation below you can rotate the cube on the left side to see how its shadow changes.",
        "controlsSummary": "implicit controls",
        "responseSummary": "visual state recomputes in real time when active parameters or scenario change",
        "renderer": "canvas",
        "family": "tesseract",
        "visual": "curve-surface",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": []
      },
      {
        "sceneId": "tesseract:module-18",
        "articleId": "tesseract",
        "moduleId": "module-18",
        "index": 18,
        "title": "Drag the shadow around to see it from different angles",
        "kind": "interactive simulation/diagram module",
        "description": "You can drag the shadow around to see it from different angles.",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "tesseract",
        "visual": "shadow-volume",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "tesseract:module-19",
        "articleId": "tesseract",
        "moduleId": "module-19",
        "index": 19,
        "title": "You can drag the slider to change the cube’s position",
        "kind": "interactive simulation/diagram module",
        "description": "In the simulation below you can drag the slider to change the cube’s position on the z axis.",
        "controlsSummary": "slider/range, drag",
        "responseSummary": "parameter values update continuously while slider position changes; dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "tesseract",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "gestures": [
          "slider/range",
          "drag"
        ]
      },
      {
        "sceneId": "tesseract:module-20",
        "articleId": "tesseract",
        "moduleId": "module-20",
        "index": 20,
        "title": "You may also drag the cube on the",
        "kind": "interactive simulation/diagram module",
        "description": "You may also drag the cube on the left side to change its orientation in the space: Notice that when the cube is perfectly aligned with the axes it can pop in and out of existen...",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "canvas",
        "family": "tesseract",
        "visual": "curve-surface",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "tesseract:module-21",
        "articleId": "tesseract",
        "moduleId": "module-21",
        "index": 21,
        "title": "His 4D Toys is a fully interactive app",
        "kind": "interactive simulation/diagram module",
        "description": "His 4D Toys is a fully interactive app that allows you to play with four dimensional objects including physical interactions between them!",
        "controlsSummary": "play/pause",
        "responseSummary": "time progression can be paused/resumed for frame-by-frame inspection",
        "renderer": "canvas",
        "family": "tesseract",
        "visual": "curve-surface",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "pauseGroup": "tesseract-motion",
        "gestures": [
          "play/pause"
        ]
      }
    ]
  },
  {
    "id": "decision-trees",
    "title": "Decision Trees",
    "author": "AWS Machine Learning University team",
    "url": "https://mlu-explain.github.io/decision-tree/",
    "lead": "MLU scrollytelling lesson that builds a decision tree step-by-step and links entropy/information gain math to split decisions.",
    "about": [
      "MLU scrollytelling lesson that builds a decision tree step-by-step and links entropy/information gain math to split decisions.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 16,
    "modules": [
      {
        "sceneId": "decision-trees:module-01",
        "articleId": "decision-trees",
        "moduleId": "module-01",
        "index": 1,
        "title": "MLU-expl AI n",
        "kind": "interactive simulation/diagram module",
        "description": "Explains MLU-expl AI n within Decision Trees using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "svg",
        "family": "decision-trees",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "decision-trees:module-02",
        "articleId": "decision-trees",
        "moduleId": "module-02",
        "index": 2,
        "title": "Decision Trees",
        "kind": "algorithm walkthrough module",
        "description": "By Jared Wilber & Lucía Santamaría Let's Build a Decision Tree Let's pretend we're farmers with a new plot of land.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "decision-trees",
        "visual": "tree-split",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "threshold",
            "label": "threshold",
            "min": 0.1,
            "max": 0.9,
            "step": 0.01,
            "value": 0.48
          },
          {
            "kind": "range",
            "id": "noise",
            "label": "noise",
            "min": 0,
            "max": 0.45,
            "step": 0.01,
            "value": 0.12
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset split"
          }
        ],
        "defaultPreset": {
          "threshold": 0.48,
          "noise": 0.12
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "decision-trees:module-03",
        "articleId": "decision-trees",
        "moduleId": "module-03",
        "index": 3,
        "title": "Let's Build a Decision Tree",
        "kind": "algorithm walkthrough module",
        "description": "By Jared Wilber & Lucía Santamaría Let's Build a Decision Tree Let's pretend we're farmers with a new plot of land.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "decision-trees",
        "visual": "tree-split",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "threshold",
            "label": "threshold",
            "min": 0.1,
            "max": 0.9,
            "step": 0.01,
            "value": 0.48
          },
          {
            "kind": "range",
            "id": "noise",
            "label": "noise",
            "min": 0,
            "max": 0.45,
            "step": 0.01,
            "value": 0.12
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset split"
          }
        ],
        "defaultPreset": {
          "threshold": 0.48,
          "noise": 0.12
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "decision-trees:module-04",
        "articleId": "decision-trees",
        "moduleId": "module-04",
        "index": 4,
        "title": "Start Splitting",
        "kind": "interactive simulation/diagram module",
        "description": "Shows candidate split boundaries and how node partitioning changes class purity and downstream tree structure.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "svg",
        "family": "decision-trees",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "decision-trees:module-05",
        "articleId": "decision-trees",
        "moduleId": "module-05",
        "index": 5,
        "title": "Split Some More",
        "kind": "interactive simulation/diagram module",
        "description": "Split Some More We continue along, hoping to split our plot of land in the most favorable manner.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "decision-trees",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "decision-trees:module-06",
        "articleId": "decision-trees",
        "moduleId": "module-06",
        "index": 6,
        "title": "And Some More",
        "kind": "interactive simulation/diagram module",
        "description": "Split Some More We continue along, hoping to split our plot of land in the most favorable manner.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "decision-trees",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "decision-trees:module-07",
        "articleId": "decision-trees",
        "moduleId": "module-07",
        "index": 7,
        "title": "And Yet Some More",
        "kind": "interactive simulation/diagram module",
        "description": "Split Some More We continue along, hoping to split our plot of land in the most favorable manner.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "decision-trees",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "decision-trees:module-08",
        "articleId": "decision-trees",
        "moduleId": "module-08",
        "index": 8,
        "title": "Don't Go Too Deep!",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Don't Go Too Deep! within Decision Trees using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "svg",
        "family": "decision-trees",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "decision-trees:module-09",
        "articleId": "decision-trees",
        "moduleId": "module-09",
        "index": 9,
        "title": "Where To Partition?",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Where To Partition? within Decision Trees using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "svg",
        "family": "decision-trees",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "decision-trees:module-10",
        "articleId": "decision-trees",
        "moduleId": "module-10",
        "index": 10,
        "title": "Entropy Properties",
        "kind": "interactive simulation/diagram module",
        "description": "Visualizes impurity metrics and gain calculations while varying split candidates.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "svg",
        "family": "decision-trees",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "decision-trees:module-11",
        "articleId": "decision-trees",
        "moduleId": "module-11",
        "index": 11,
        "title": "Information Gain",
        "kind": "interactive simulation/diagram module",
        "description": "The ID3 algorithm will select the split point with the largest information gain, shown as the peak of the black line in the bottom chart of 0.574 at Diameter = 0.45 .",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "decision-trees",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "decision-trees:module-12",
        "articleId": "decision-trees",
        "moduleId": "module-12",
        "index": 12,
        "title": "ID3 Algorithm Steps",
        "kind": "algorithm walkthrough module",
        "description": "The ID3 algorithm will select the split point with the largest information gain, shown as the peak of the black line in the bottom chart of 0.574 at Diameter = 0.45 .",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "decision-trees",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "decision-trees:module-13",
        "articleId": "decision-trees",
        "moduleId": "module-13",
        "index": 13,
        "title": "Click on the Add and Remove buttons to",
        "kind": "interactive simulation/diagram module",
        "description": "Click on the Add and Remove buttons to modify the composition of the bubble.",
        "controlsSummary": "click/tap",
        "responseSummary": "click actions trigger state transitions or object selection",
        "renderer": "svg",
        "family": "decision-trees",
        "visual": "click-ratchet",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "speed",
            "label": "speed",
            "min": 0.2,
            "max": 3.2,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "ratio",
            "label": "ratio",
            "min": 0.35,
            "max": 1.8,
            "step": 0.05,
            "value": 0.92
          },
          {
            "kind": "range",
            "id": "impulse",
            "label": "impulse",
            "min": 0.1,
            "max": 1,
            "step": 0.01,
            "value": 0.55
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset module"
          }
        ],
        "defaultPreset": {
          "speed": 1,
          "ratio": 0.92,
          "impulse": 0.55
        },
        "gestures": [
          "click/tap"
        ]
      },
      {
        "sceneId": "decision-trees:module-14",
        "articleId": "decision-trees",
        "moduleId": "module-14",
        "index": 14,
        "title": "The line chart displays the different split values",
        "kind": "chart/plot module",
        "description": "The line chart displays the different split values for the Diameter feature.",
        "controlsSummary": "implicit controls",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "decision-trees",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": []
      },
      {
        "sceneId": "decision-trees:module-15",
        "articleId": "decision-trees",
        "moduleId": "module-15",
        "index": 15,
        "title": "Move the decision boundary yourself to see how",
        "kind": "chart/plot module",
        "description": "Move the decision boundary yourself to see how the data points in the top chart are assigned to the left or right children nodes accordingly.",
        "controlsSummary": "implicit controls",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "decision-trees",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": []
      },
      {
        "sceneId": "decision-trees:module-16",
        "articleId": "decision-trees",
        "moduleId": "module-16",
        "index": 16,
        "title": "Move the decision boundary yourself to see how",
        "kind": "chart/plot module",
        "description": "Move the decision boundary yourself to see how the data points in the top chart are assigned to the left or right children nodes accordingly.",
        "controlsSummary": "implicit controls",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "decision-trees",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": []
      }
    ]
  },
  {
    "id": "double-descent-2",
    "title": "Double Descent 2",
    "author": "AWS Machine Learning University team",
    "url": "https://mlu-explain.github.io/double-descent2/",
    "lead": "Second part of the double-descent series, focused on mathematical derivation and interpolation-threshold behavior.",
    "about": [
      "Second part of the double-descent series, focused on mathematical derivation and interpolation-threshold behavior.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 11,
    "modules": [
      {
        "sceneId": "double-descent-2:module-01",
        "articleId": "double-descent-2",
        "moduleId": "module-01",
        "index": 1,
        "title": "MLU-expl AI n",
        "kind": "interactive simulation/diagram module",
        "description": "Explains MLU-expl AI n within Double Descent 2 using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, playback/scrub",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection",
        "renderer": "svg",
        "family": "double-descent-2",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "double-descent-2:module-02",
        "articleId": "double-descent-2",
        "moduleId": "module-02",
        "index": 2,
        "title": "Double Descent",
        "kind": "interactive simulation/diagram module",
        "description": "Shows error-vs-complexity behavior around interpolation threshold and overparameterized regime transitions.",
        "controlsSummary": "slider/range, playback/scrub",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection",
        "renderer": "svg",
        "family": "double-descent-2",
        "visual": "double-descent",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "capacity",
            "label": "capacity",
            "min": 0.2,
            "max": 3,
            "step": 0.02,
            "value": 1.2
          },
          {
            "kind": "range",
            "id": "data",
            "label": "data ratio",
            "min": 0.4,
            "max": 2.2,
            "step": 0.02,
            "value": 1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset curve"
          }
        ],
        "defaultPreset": {
          "capacity": 1.2,
          "data": 1
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "double-descent-2:module-03",
        "articleId": "double-descent-2",
        "moduleId": "module-03",
        "index": 3,
        "title": "Part 2: A Mathematical Explanation",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Part 2: A Mathematical Explanation within Double Descent 2 using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, playback/scrub",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection",
        "renderer": "svg",
        "family": "double-descent-2",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "double-descent-2:module-04",
        "articleId": "double-descent-2",
        "moduleId": "module-04",
        "index": 4,
        "title": "Brent Werness & Jared Wilber , December 2021",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Brent Werness & Jared Wilber , December 2021 within Double Descent 2 using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, playback/scrub",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection",
        "renderer": "svg",
        "family": "double-descent-2",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "double-descent-2:module-05",
        "articleId": "double-descent-2",
        "moduleId": "module-05",
        "index": 5,
        "title": "A Sketch of the Mathematics",
        "kind": "interactive simulation/diagram module",
        "description": "Explains A Sketch of the Mathematics within Double Descent 2 using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, playback/scrub",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection",
        "renderer": "svg",
        "family": "double-descent-2",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "double-descent-2:module-06",
        "articleId": "double-descent-2",
        "moduleId": "module-06",
        "index": 6,
        "title": "Our Piecewise Linear Model",
        "kind": "algorithm walkthrough module",
        "description": "Explains Our Piecewise Linear Model within Double Descent 2 using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, playback/scrub",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection",
        "renderer": "svg",
        "family": "double-descent-2",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "double-descent-2:module-07",
        "articleId": "double-descent-2",
        "moduleId": "module-07",
        "index": 7,
        "title": "Below The Interpolation Threshold",
        "kind": "interactive simulation/diagram module",
        "description": "Shows error-vs-complexity behavior around interpolation threshold and overparameterized regime transitions.",
        "controlsSummary": "slider/range, playback/scrub",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection",
        "renderer": "svg",
        "family": "double-descent-2",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "double-descent-2:module-08",
        "articleId": "double-descent-2",
        "moduleId": "module-08",
        "index": 8,
        "title": "At The Interpolation Threshold",
        "kind": "interactive simulation/diagram module",
        "description": "Shows error-vs-complexity behavior around interpolation threshold and overparameterized regime transitions.",
        "controlsSummary": "slider/range, playback/scrub",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection",
        "renderer": "svg",
        "family": "double-descent-2",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "double-descent-2:module-09",
        "articleId": "double-descent-2",
        "moduleId": "module-09",
        "index": 9,
        "title": "To Infinity! (But Not Beyond)",
        "kind": "interactive simulation/diagram module",
        "description": "Explains To Infinity! (But Not Beyond) within Double Descent 2 using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, playback/scrub",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection",
        "renderer": "svg",
        "family": "double-descent-2",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "double-descent-2:module-10",
        "articleId": "double-descent-2",
        "moduleId": "module-10",
        "index": 10,
        "title": "Summary",
        "kind": "reference/narrative section",
        "description": "Narrative/reference section in Double Descent 2 that summarizes results and links supporting resources.",
        "controlsSummary": "slider/range, playback/scrub",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection",
        "renderer": "svg",
        "family": "double-descent-2",
        "visual": "projection-lab",
        "layout": "note",
        "noteOnly": true,
        "controls": [],
        "defaultPreset": {},
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "double-descent-2:module-11",
        "articleId": "double-descent-2",
        "moduleId": "module-11",
        "index": 11,
        "title": "Resources + Open Source:",
        "kind": "reference/narrative section",
        "description": "Narrative/reference section in Double Descent 2 that summarizes results and links supporting resources.",
        "controlsSummary": "slider/range, playback/scrub",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection",
        "renderer": "svg",
        "family": "double-descent-2",
        "visual": "projection-lab",
        "layout": "note",
        "noteOnly": true,
        "controls": [],
        "defaultPreset": {},
        "gestures": [
          "slider/range"
        ]
      }
    ]
  },
  {
    "id": "double-descent",
    "title": "Double Descent",
    "author": "AWS Machine Learning University team",
    "url": "https://mlu-explain.github.io/double-descent/",
    "lead": "Visual introduction to double descent showing how model complexity changes train/test error across regimes.",
    "about": [
      "Visual introduction to double descent showing how model complexity changes train/test error across regimes.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 14,
    "modules": [
      {
        "sceneId": "double-descent:module-01",
        "articleId": "double-descent",
        "moduleId": "module-01",
        "index": 1,
        "title": "MLU-expl AI n",
        "kind": "interactive simulation/diagram module",
        "description": "Explains MLU-expl AI n within Double Descent using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, playback/scrub",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection",
        "renderer": "svg",
        "family": "double-descent",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "double-descent:module-02",
        "articleId": "double-descent",
        "moduleId": "module-02",
        "index": 2,
        "title": "Double Descent",
        "kind": "interactive simulation/diagram module",
        "description": "Shows error-vs-complexity behavior around interpolation threshold and overparameterized regime transitions.",
        "controlsSummary": "slider/range, playback/scrub",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection",
        "renderer": "svg",
        "family": "double-descent",
        "visual": "double-descent",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "capacity",
            "label": "capacity",
            "min": 0.2,
            "max": 3,
            "step": 0.02,
            "value": 1.2
          },
          {
            "kind": "range",
            "id": "data",
            "label": "data ratio",
            "min": 0.4,
            "max": 2.2,
            "step": 0.02,
            "value": 1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset curve"
          }
        ],
        "defaultPreset": {
          "capacity": 1.2,
          "data": 1
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "double-descent:module-03",
        "articleId": "double-descent",
        "moduleId": "module-03",
        "index": 3,
        "title": "Part 1: A Visual Introduction",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Part 1: A Visual Introduction within Double Descent using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, playback/scrub",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection",
        "renderer": "svg",
        "family": "double-descent",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "double-descent:module-04",
        "articleId": "double-descent",
        "moduleId": "module-04",
        "index": 4,
        "title": "Jared Wilber & Brent Werness, December 2021",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Jared Wilber & Brent Werness, December 2021 within Double Descent using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, playback/scrub",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection",
        "renderer": "svg",
        "family": "double-descent",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "double-descent:module-05",
        "articleId": "double-descent",
        "moduleId": "module-05",
        "index": 5,
        "title": "What's Going On?",
        "kind": "interactive simulation/diagram module",
        "description": "Explains What's Going On? within Double Descent using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, playback/scrub",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection",
        "renderer": "svg",
        "family": "double-descent",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "double-descent:module-06",
        "articleId": "double-descent",
        "moduleId": "module-06",
        "index": 6,
        "title": "Minding The Gap",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Minding The Gap within Double Descent using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, playback/scrub",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection",
        "renderer": "svg",
        "family": "double-descent",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "double-descent:module-07",
        "articleId": "double-descent",
        "moduleId": "module-07",
        "index": 7,
        "title": "Final Takeaways",
        "kind": "reference/narrative section",
        "description": "Narrative/reference section in Double Descent that summarizes results and links supporting resources.",
        "controlsSummary": "slider/range, playback/scrub",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection",
        "renderer": "svg",
        "family": "double-descent",
        "visual": "projection-lab",
        "layout": "note",
        "noteOnly": true,
        "controls": [],
        "defaultPreset": {},
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "double-descent:module-08",
        "articleId": "double-descent",
        "moduleId": "module-08",
        "index": 8,
        "title": "References & Open Source",
        "kind": "reference/narrative section",
        "description": "Narrative/reference section in Double Descent that summarizes results and links supporting resources.",
        "controlsSummary": "slider/range, playback/scrub",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; play/pause controls time progression for stepwise inspection",
        "renderer": "svg",
        "family": "double-descent",
        "visual": "projection-lab",
        "layout": "note",
        "noteOnly": true,
        "controls": [],
        "defaultPreset": {},
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "double-descent:module-09",
        "articleId": "double-descent",
        "moduleId": "module-09",
        "index": 9,
        "title": "To begin, we plot a simple model",
        "kind": "chart/plot module",
        "description": "To begin, we plot a simple model.",
        "controlsSummary": "implicit controls",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "double-descent",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": []
      },
      {
        "sceneId": "double-descent:module-10",
        "articleId": "double-descent",
        "moduleId": "module-10",
        "index": 10,
        "title": "Next, we plot a model that's not too",
        "kind": "chart/plot module",
        "description": "Next, we plot a model that's not too simple, nor too complex.",
        "controlsSummary": "implicit controls",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "double-descent",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": []
      },
      {
        "sceneId": "double-descent:module-11",
        "articleId": "double-descent",
        "moduleId": "module-11",
        "index": 11,
        "title": "This is reflected in the low error (",
        "kind": "chart/plot module",
        "description": "This is reflected in the low error ( ≤ 0.25) in the bottom chart.",
        "controlsSummary": "implicit controls",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "double-descent",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": []
      },
      {
        "sceneId": "double-descent:module-12",
        "articleId": "double-descent",
        "moduleId": "module-12",
        "index": 12,
        "title": "Now, let's plot a complex model, one where",
        "kind": "chart/plot module",
        "description": "Now, let's plot a complex model, one where our number of features is equal to the number of dimensions.",
        "controlsSummary": "implicit controls",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "double-descent",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": []
      },
      {
        "sceneId": "double-descent:module-13",
        "articleId": "double-descent",
        "moduleId": "module-13",
        "index": 13,
        "title": "At this stage we're overfitting, which leads to",
        "kind": "chart/plot module",
        "description": "At this stage we're overfitting, which leads to the high test error shown in the plot.",
        "controlsSummary": "implicit controls",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "double-descent",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": []
      },
      {
        "sceneId": "double-descent:module-14",
        "articleId": "double-descent",
        "moduleId": "module-14",
        "index": 14,
        "title": "Toggle the slider to modify the number of",
        "kind": "interactive simulation/diagram module",
        "description": "Toggle the slider to modify the number of non-linear features used to build the models.",
        "controlsSummary": "slider/range, toggle/switch",
        "responseSummary": "parameter values update continuously while slider position changes",
        "renderer": "svg",
        "family": "double-descent",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range"
        ]
      }
    ]
  },
  {
    "id": "linear-regression",
    "title": "Linear Regression",
    "author": "AWS Machine Learning University team",
    "url": "https://mlu-explain.github.io/linear-regression/",
    "lead": "Interactive linear regression lesson connecting line fitting, error minimization, and prediction behavior.",
    "about": [
      "Interactive linear regression lesson connecting line fitting, error minimization, and prediction behavior.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 5,
    "modules": [
      {
        "sceneId": "linear-regression:module-01",
        "articleId": "linear-regression",
        "moduleId": "module-01",
        "index": 1,
        "title": "Dataset scatter and fit line",
        "kind": "chart/plot module",
        "description": "Plots observed points and the current regression line so users can compare model fit against data distribution.",
        "controlsSummary": "slider/range controls, scroll steps",
        "responseSummary": "line slope/intercept and residual indicators update immediately as model complexity or parameters change",
        "renderer": "svg",
        "family": "linear-regression",
        "visual": "regression-fit",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slope",
            "label": "slope",
            "min": -2,
            "max": 2,
            "step": 0.02,
            "value": 0.6
          },
          {
            "kind": "range",
            "id": "intercept",
            "label": "intercept",
            "min": -1.5,
            "max": 1.5,
            "step": 0.02,
            "value": 0.1
          },
          {
            "kind": "range",
            "id": "spread",
            "label": "spread",
            "min": 0.1,
            "max": 1.2,
            "step": 0.01,
            "value": 0.35
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset fit"
          }
        ],
        "defaultPreset": {
          "slope": 0.6,
          "intercept": 0.1,
          "spread": 0.35
        },
        "sharedGroup": "linear-regression-core",
        "pauseGroup": "linear-regression-motion",
        "gestures": [
          "slider/range",
          "play/pause"
        ]
      },
      {
        "sceneId": "linear-regression:module-02",
        "articleId": "linear-regression",
        "moduleId": "module-02",
        "index": 2,
        "title": "Residual and loss panel",
        "kind": "interactive simulation/diagram module",
        "description": "Displays prediction errors and aggregate loss to explain why certain lines are better fits.",
        "controlsSummary": "slider/range controls",
        "responseSummary": "residual bars and error values recompute in real time",
        "renderer": "svg",
        "family": "linear-regression",
        "visual": "regression-residual",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slope",
            "label": "slope",
            "min": -2,
            "max": 2,
            "step": 0.02,
            "value": 0.6
          },
          {
            "kind": "range",
            "id": "intercept",
            "label": "intercept",
            "min": -1.5,
            "max": 1.5,
            "step": 0.02,
            "value": 0.1
          },
          {
            "kind": "range",
            "id": "spread",
            "label": "spread",
            "min": 0.1,
            "max": 1.2,
            "step": 0.01,
            "value": 0.35
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset fit"
          }
        ],
        "defaultPreset": {
          "slope": 0.6,
          "intercept": 0.1,
          "spread": 0.35
        },
        "sharedGroup": "linear-regression-core",
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "linear-regression:module-03",
        "articleId": "linear-regression",
        "moduleId": "module-03",
        "index": 3,
        "title": "Prediction crosshair explorer",
        "kind": "interactive simulation/diagram module",
        "description": "Lets users inspect predictions for selected x-values and compare expected vs predicted values.",
        "controlsSummary": "pointer move, click/tap",
        "responseSummary": "crosshair and predicted output readout move with pointer position",
        "renderer": "svg",
        "family": "linear-regression",
        "visual": "regression-fit",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slope",
            "label": "slope",
            "min": -2,
            "max": 2,
            "step": 0.02,
            "value": 0.6
          },
          {
            "kind": "range",
            "id": "intercept",
            "label": "intercept",
            "min": -1.5,
            "max": 1.5,
            "step": 0.02,
            "value": 0.1
          },
          {
            "kind": "range",
            "id": "spread",
            "label": "spread",
            "min": 0.1,
            "max": 1.2,
            "step": 0.01,
            "value": 0.35
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset fit"
          }
        ],
        "defaultPreset": {
          "slope": 0.6,
          "intercept": 0.1,
          "spread": 0.35
        },
        "sharedGroup": "linear-regression-core",
        "gestures": [
          "click/tap"
        ]
      },
      {
        "sceneId": "linear-regression:module-04",
        "articleId": "linear-regression",
        "moduleId": "module-04",
        "index": 4,
        "title": "Formula rendering block",
        "kind": "algorithm walkthrough module",
        "description": "Renders regression equations and variable substitutions for current state using dynamic math text.",
        "controlsSummary": "step navigation, parameter controls",
        "responseSummary": "equations and numeric substitutions stay synchronized with chart state",
        "renderer": "svg",
        "family": "linear-regression",
        "visual": "regression-formula",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slope",
            "label": "slope",
            "min": -2,
            "max": 2,
            "step": 0.02,
            "value": 0.6
          },
          {
            "kind": "range",
            "id": "intercept",
            "label": "intercept",
            "min": -1.5,
            "max": 1.5,
            "step": 0.02,
            "value": 0.1
          },
          {
            "kind": "range",
            "id": "spread",
            "label": "spread",
            "min": 0.1,
            "max": 1.2,
            "step": 0.01,
            "value": 0.35
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset fit"
          }
        ],
        "defaultPreset": {
          "slope": 0.6,
          "intercept": 0.1,
          "spread": 0.35
        },
        "sharedGroup": "linear-regression-core",
        "gestures": []
      },
      {
        "sceneId": "linear-regression:module-05",
        "articleId": "linear-regression",
        "moduleId": "module-05",
        "index": 5,
        "title": "Scrollytelling state machine",
        "kind": "interactive simulation/diagram module",
        "description": "Narrative sections activate specific visualization states to teach concepts in a fixed progression.",
        "controlsSummary": "scroll",
        "responseSummary": "visual focus, annotations, and highlighted variables transition when section changes",
        "renderer": "svg",
        "family": "linear-regression",
        "visual": "regression-fit",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slope",
            "label": "slope",
            "min": -2,
            "max": 2,
            "step": 0.02,
            "value": 0.6
          },
          {
            "kind": "range",
            "id": "intercept",
            "label": "intercept",
            "min": -1.5,
            "max": 1.5,
            "step": 0.02,
            "value": 0.1
          },
          {
            "kind": "range",
            "id": "spread",
            "label": "spread",
            "min": 0.1,
            "max": 1.2,
            "step": 0.01,
            "value": 0.35
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset fit"
          }
        ],
        "defaultPreset": {
          "slope": 0.6,
          "intercept": 0.1,
          "spread": 0.35
        },
        "sharedGroup": "linear-regression-core",
        "pauseGroup": "linear-regression-motion",
        "gestures": [
          "play/pause"
        ]
      }
    ]
  },
  {
    "id": "logistic-regression",
    "title": "Logistic Regression",
    "author": "AWS Machine Learning University team",
    "url": "https://mlu-explain.github.io/logistic-regression/",
    "lead": "Interactive logistic regression lesson explaining sigmoid probability mapping, classification boundary, and thresholding.",
    "about": [
      "Interactive logistic regression lesson explaining sigmoid probability mapping, classification boundary, and thresholding.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 5,
    "modules": [
      {
        "sceneId": "logistic-regression:module-01",
        "articleId": "logistic-regression",
        "moduleId": "module-01",
        "index": 1,
        "title": "Binary scatter with boundary",
        "kind": "chart/plot module",
        "description": "Shows two classes and the current decision boundary separating predicted labels.",
        "controlsSummary": "slider/range controls, scroll steps",
        "responseSummary": "boundary position/shape updates as parameters change",
        "renderer": "svg",
        "family": "logistic-regression",
        "visual": "regression-fit",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slope",
            "label": "slope",
            "min": -2,
            "max": 2,
            "step": 0.02,
            "value": 0.6
          },
          {
            "kind": "range",
            "id": "intercept",
            "label": "intercept",
            "min": -1.5,
            "max": 1.5,
            "step": 0.02,
            "value": 0.1
          },
          {
            "kind": "range",
            "id": "spread",
            "label": "spread",
            "min": 0.1,
            "max": 1.2,
            "step": 0.01,
            "value": 0.35
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset fit"
          }
        ],
        "defaultPreset": {
          "slope": 0.6,
          "intercept": 0.1,
          "spread": 0.35
        },
        "pauseGroup": "logistic-regression-motion",
        "gestures": [
          "slider/range",
          "play/pause"
        ]
      },
      {
        "sceneId": "logistic-regression:module-02",
        "articleId": "logistic-regression",
        "moduleId": "module-02",
        "index": 2,
        "title": "Sigmoid probability curve",
        "kind": "chart/plot module",
        "description": "Visualizes mapping from linear score to probability through the logistic function.",
        "controlsSummary": "slider/range controls",
        "responseSummary": "curve shape and selected probability marker update continuously",
        "renderer": "svg",
        "family": "logistic-regression",
        "visual": "regression-fit",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slope",
            "label": "slope",
            "min": -2,
            "max": 2,
            "step": 0.02,
            "value": 0.6
          },
          {
            "kind": "range",
            "id": "intercept",
            "label": "intercept",
            "min": -1.5,
            "max": 1.5,
            "step": 0.02,
            "value": 0.1
          },
          {
            "kind": "range",
            "id": "spread",
            "label": "spread",
            "min": 0.1,
            "max": 1.2,
            "step": 0.01,
            "value": 0.35
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset fit"
          }
        ],
        "defaultPreset": {
          "slope": 0.6,
          "intercept": 0.1,
          "spread": 0.35
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "logistic-regression:module-03",
        "articleId": "logistic-regression",
        "moduleId": "module-03",
        "index": 3,
        "title": "Threshold classifier panel",
        "kind": "interactive simulation/diagram module",
        "description": "Demonstrates how changing threshold flips predicted classes and confusion outcomes.",
        "controlsSummary": "slider/range controls",
        "responseSummary": "predicted labels, color regions, and confusion counts update in lockstep",
        "renderer": "svg",
        "family": "logistic-regression",
        "visual": "regression-fit",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slope",
            "label": "slope",
            "min": -2,
            "max": 2,
            "step": 0.02,
            "value": 0.6
          },
          {
            "kind": "range",
            "id": "intercept",
            "label": "intercept",
            "min": -1.5,
            "max": 1.5,
            "step": 0.02,
            "value": 0.1
          },
          {
            "kind": "range",
            "id": "spread",
            "label": "spread",
            "min": 0.1,
            "max": 1.2,
            "step": 0.01,
            "value": 0.35
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset fit"
          }
        ],
        "defaultPreset": {
          "slope": 0.6,
          "intercept": 0.1,
          "spread": 0.35
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "logistic-regression:module-04",
        "articleId": "logistic-regression",
        "moduleId": "module-04",
        "index": 4,
        "title": "Equation and odds interpretation block",
        "kind": "algorithm walkthrough module",
        "description": "Connects logits, odds, and probabilities with annotated formulas.",
        "controlsSummary": "step navigation",
        "responseSummary": "highlighted terms and substituted values follow current teaching step",
        "renderer": "svg",
        "family": "logistic-regression",
        "visual": "regression-fit",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slope",
            "label": "slope",
            "min": -2,
            "max": 2,
            "step": 0.02,
            "value": 0.6
          },
          {
            "kind": "range",
            "id": "intercept",
            "label": "intercept",
            "min": -1.5,
            "max": 1.5,
            "step": 0.02,
            "value": 0.1
          },
          {
            "kind": "range",
            "id": "spread",
            "label": "spread",
            "min": 0.1,
            "max": 1.2,
            "step": 0.01,
            "value": 0.35
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset fit"
          }
        ],
        "defaultPreset": {
          "slope": 0.6,
          "intercept": 0.1,
          "spread": 0.35
        },
        "gestures": []
      },
      {
        "sceneId": "logistic-regression:module-05",
        "articleId": "logistic-regression",
        "moduleId": "module-05",
        "index": 5,
        "title": "Scrollytelling transitions",
        "kind": "interactive simulation/diagram module",
        "description": "Coordinates text and visual states to progressively introduce classification intuition.",
        "controlsSummary": "scroll",
        "responseSummary": "active scene and annotations switch at section boundaries",
        "renderer": "svg",
        "family": "logistic-regression",
        "visual": "regression-fit",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slope",
            "label": "slope",
            "min": -2,
            "max": 2,
            "step": 0.02,
            "value": 0.6
          },
          {
            "kind": "range",
            "id": "intercept",
            "label": "intercept",
            "min": -1.5,
            "max": 1.5,
            "step": 0.02,
            "value": 0.1
          },
          {
            "kind": "range",
            "id": "spread",
            "label": "spread",
            "min": 0.1,
            "max": 1.2,
            "step": 0.01,
            "value": 0.35
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset fit"
          }
        ],
        "defaultPreset": {
          "slope": 0.6,
          "intercept": 0.1,
          "spread": 0.35
        },
        "pauseGroup": "logistic-regression-motion",
        "gestures": [
          "play/pause"
        ]
      }
    ]
  },
  {
    "id": "precision-recall",
    "title": "Precision & Recall",
    "author": "AWS Machine Learning University team",
    "url": "https://mlu-explain.github.io/precision-recall/",
    "lead": "Classification-metrics explainer that links confusion matrix outcomes to precision/recall tradeoffs.",
    "about": [
      "Classification-metrics explainer that links confusion matrix outcomes to precision/recall tradeoffs.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 5,
    "modules": [
      {
        "sceneId": "precision-recall:module-01",
        "articleId": "precision-recall",
        "moduleId": "module-01",
        "index": 1,
        "title": "Confusion matrix sandbox",
        "kind": "interactive simulation/diagram module",
        "description": "Shows TP/FP/TN/FN partitions and how they move as threshold or decision rules change.",
        "controlsSummary": "slider/range controls",
        "responseSummary": "matrix counts and category highlights update instantly",
        "renderer": "svg",
        "family": "precision-recall",
        "visual": "ml-threshold",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "threshold",
            "label": "threshold",
            "min": 0.05,
            "max": 0.95,
            "step": 0.01,
            "value": 0.52
          },
          {
            "kind": "range",
            "id": "imbalance",
            "label": "imbalance",
            "min": 0.1,
            "max": 0.9,
            "step": 0.01,
            "value": 0.35
          },
          {
            "kind": "range",
            "id": "noise",
            "label": "noise",
            "min": 0,
            "max": 0.5,
            "step": 0.01,
            "value": 0.12
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset threshold"
          }
        ],
        "defaultPreset": {
          "threshold": 0.52,
          "imbalance": 0.35,
          "noise": 0.12
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "precision-recall:module-02",
        "articleId": "precision-recall",
        "moduleId": "module-02",
        "index": 2,
        "title": "Precision-recall metric panel",
        "kind": "chart/plot module",
        "description": "Calculates and displays precision and recall from the live confusion state.",
        "controlsSummary": "slider/range controls",
        "responseSummary": "metric values and explanatory labels update in real time",
        "renderer": "svg",
        "family": "precision-recall",
        "visual": "ml-threshold",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "threshold",
            "label": "threshold",
            "min": 0.05,
            "max": 0.95,
            "step": 0.01,
            "value": 0.52
          },
          {
            "kind": "range",
            "id": "imbalance",
            "label": "imbalance",
            "min": 0.1,
            "max": 0.9,
            "step": 0.01,
            "value": 0.35
          },
          {
            "kind": "range",
            "id": "noise",
            "label": "noise",
            "min": 0,
            "max": 0.5,
            "step": 0.01,
            "value": 0.12
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset threshold"
          }
        ],
        "defaultPreset": {
          "threshold": 0.52,
          "imbalance": 0.35,
          "noise": 0.12
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "precision-recall:module-03",
        "articleId": "precision-recall",
        "moduleId": "module-03",
        "index": 3,
        "title": "Threshold tradeoff explorer",
        "kind": "interactive simulation/diagram module",
        "description": "Illustrates that improving one metric can reduce the other depending on threshold choice.",
        "controlsSummary": "slider/range controls",
        "responseSummary": "classification boundary and both metrics change together",
        "renderer": "svg",
        "family": "precision-recall",
        "visual": "ml-threshold",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "threshold",
            "label": "threshold",
            "min": 0.05,
            "max": 0.95,
            "step": 0.01,
            "value": 0.52
          },
          {
            "kind": "range",
            "id": "imbalance",
            "label": "imbalance",
            "min": 0.1,
            "max": 0.9,
            "step": 0.01,
            "value": 0.35
          },
          {
            "kind": "range",
            "id": "noise",
            "label": "noise",
            "min": 0,
            "max": 0.5,
            "step": 0.01,
            "value": 0.12
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset threshold"
          }
        ],
        "defaultPreset": {
          "threshold": 0.52,
          "imbalance": 0.35,
          "noise": 0.12
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "precision-recall:module-04",
        "articleId": "precision-recall",
        "moduleId": "module-04",
        "index": 4,
        "title": "Formula explanation panel",
        "kind": "algorithm walkthrough module",
        "description": "Shows equations and numerator/denominator contributions for each metric.",
        "controlsSummary": "step navigation",
        "responseSummary": "equation highlights track currently emphasized confusion terms",
        "renderer": "svg",
        "family": "precision-recall",
        "visual": "ml-threshold",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "threshold",
            "label": "threshold",
            "min": 0.05,
            "max": 0.95,
            "step": 0.01,
            "value": 0.52
          },
          {
            "kind": "range",
            "id": "imbalance",
            "label": "imbalance",
            "min": 0.1,
            "max": 0.9,
            "step": 0.01,
            "value": 0.35
          },
          {
            "kind": "range",
            "id": "noise",
            "label": "noise",
            "min": 0,
            "max": 0.5,
            "step": 0.01,
            "value": 0.12
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset threshold"
          }
        ],
        "defaultPreset": {
          "threshold": 0.52,
          "imbalance": 0.35,
          "noise": 0.12
        },
        "gestures": []
      },
      {
        "sceneId": "precision-recall:module-05",
        "articleId": "precision-recall",
        "moduleId": "module-05",
        "index": 5,
        "title": "Scrollytelling transitions",
        "kind": "interactive simulation/diagram module",
        "description": "Maps narrative sections to curated examples of precision-recall tradeoffs.",
        "controlsSummary": "scroll",
        "responseSummary": "active examples and visual highlights advance with reading progress",
        "renderer": "svg",
        "family": "precision-recall",
        "visual": "ml-threshold",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "threshold",
            "label": "threshold",
            "min": 0.05,
            "max": 0.95,
            "step": 0.01,
            "value": 0.52
          },
          {
            "kind": "range",
            "id": "imbalance",
            "label": "imbalance",
            "min": 0.1,
            "max": 0.9,
            "step": 0.01,
            "value": 0.35
          },
          {
            "kind": "range",
            "id": "noise",
            "label": "noise",
            "min": 0,
            "max": 0.5,
            "step": 0.01,
            "value": 0.12
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset threshold"
          }
        ],
        "defaultPreset": {
          "threshold": 0.52,
          "imbalance": 0.35,
          "noise": 0.12
        },
        "pauseGroup": "precision-recall-motion",
        "gestures": [
          "play/pause"
        ]
      }
    ]
  },
  {
    "id": "random-forest",
    "title": "Random Forest",
    "author": "AWS Machine Learning University team",
    "url": "https://mlu-explain.github.io/random-forest/",
    "lead": "Interactive random forest lesson for bagging, feature randomness, and majority-vote aggregation.",
    "about": [
      "Interactive random forest lesson for bagging, feature randomness, and majority-vote aggregation.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 13,
    "modules": [
      {
        "sceneId": "random-forest:module-01",
        "articleId": "random-forest",
        "moduleId": "module-01",
        "index": 1,
        "title": "MLU-expl AI n",
        "kind": "interactive simulation/diagram module",
        "description": "Explains MLU-expl AI n within Random Forest using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "random-forest",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "random-forest:module-02",
        "articleId": "random-forest",
        "moduleId": "module-02",
        "index": 2,
        "title": "The Random Forest Algorithm",
        "kind": "algorithm walkthrough module",
        "description": "It's your turn Click the remaining data points to see how the random forest makes a prediction.",
        "controlsSummary": "click/tap",
        "responseSummary": "click actions trigger state transitions or object selection",
        "renderer": "svg",
        "family": "random-forest",
        "visual": "ensemble-vote",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "trees",
            "label": "trees",
            "min": 3,
            "max": 7,
            "step": 1,
            "value": 5
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reshuffle"
          }
        ],
        "defaultPreset": {
          "trees": 5
        },
        "gestures": [
          "click/tap"
        ]
      },
      {
        "sceneId": "random-forest:module-03",
        "articleId": "random-forest",
        "moduleId": "module-03",
        "index": 3,
        "title": "But First: A Theorem From 1785",
        "kind": "interactive simulation/diagram module",
        "description": "Explains But First: A Theorem From 1785 within Random Forest using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "random-forest",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "random-forest:module-04",
        "articleId": "random-forest",
        "moduleId": "module-04",
        "index": 4,
        "title": "Ensemble Learning",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Ensemble Learning within Random Forest using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "random-forest",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "random-forest:module-05",
        "articleId": "random-forest",
        "moduleId": "module-05",
        "index": 5,
        "title": "Random Forest",
        "kind": "algorithm walkthrough module",
        "description": "It's your turn Click the remaining data points to see how the random forest makes a prediction.",
        "controlsSummary": "click/tap",
        "responseSummary": "click actions trigger state transitions or object selection",
        "renderer": "svg",
        "family": "random-forest",
        "visual": "ensemble-vote",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "trees",
            "label": "trees",
            "min": 3,
            "max": 7,
            "step": 1,
            "value": 5
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reshuffle"
          }
        ],
        "defaultPreset": {
          "trees": 5
        },
        "gestures": [
          "click/tap"
        ]
      },
      {
        "sceneId": "random-forest:module-06",
        "articleId": "random-forest",
        "moduleId": "module-06",
        "index": 6,
        "title": "Bagging Method",
        "kind": "interactive simulation/diagram module",
        "description": "Demonstrates ensemble construction (sampling, feature randomness, and vote aggregation) and resulting prediction changes.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "random-forest",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "random-forest:module-07",
        "articleId": "random-forest",
        "moduleId": "module-07",
        "index": 7,
        "title": "Feature Selection",
        "kind": "interactive simulation/diagram module",
        "description": "Demonstrates ensemble construction (sampling, feature randomness, and vote aggregation) and resulting prediction changes.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "random-forest",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "random-forest:module-08",
        "articleId": "random-forest",
        "moduleId": "module-08",
        "index": 8,
        "title": "Here are trees built from each sample",
        "kind": "algorithm walkthrough module",
        "description": "Explains Here are trees built from each sample. within Random Forest using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "random-forest",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "random-forest:module-09",
        "articleId": "random-forest",
        "moduleId": "module-09",
        "index": 9,
        "title": "Each tree produces a prediction",
        "kind": "algorithm walkthrough module",
        "description": "It's your turn Click the remaining data points to see how the random forest makes a prediction.",
        "controlsSummary": "click/tap",
        "responseSummary": "click actions trigger state transitions or object selection",
        "renderer": "canvas",
        "family": "random-forest",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "click/tap"
        ]
      },
      {
        "sceneId": "random-forest:module-10",
        "articleId": "random-forest",
        "moduleId": "module-10",
        "index": 10,
        "title": "Majority vote",
        "kind": "interactive simulation/diagram module",
        "description": "Demonstrates ensemble construction (sampling, feature randomness, and vote aggregation) and resulting prediction changes.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "random-forest",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "random-forest:module-11",
        "articleId": "random-forest",
        "moduleId": "module-11",
        "index": 11,
        "title": "It's your turn",
        "kind": "interactive simulation/diagram module",
        "description": "It's your turn Click the remaining data points to see how the random forest makes a prediction.",
        "controlsSummary": "click/tap",
        "responseSummary": "click actions trigger state transitions or object selection",
        "renderer": "canvas",
        "family": "random-forest",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "click/tap"
        ]
      },
      {
        "sceneId": "random-forest:module-12",
        "articleId": "random-forest",
        "moduleId": "module-12",
        "index": 12,
        "title": "Variance in Composition",
        "kind": "interactive simulation/diagram module",
        "description": "Visualizes decomposition of model error and sensitivity to complexity/smoothing choices.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "canvas",
        "family": "random-forest",
        "visual": "orbit-constellation",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "time",
            "label": "time",
            "min": 0.2,
            "max": 3,
            "step": 0.05,
            "value": 1
          },
          {
            "kind": "range",
            "id": "altitude",
            "label": "altitude",
            "min": 0.1,
            "max": 0.95,
            "step": 0.01,
            "value": 0.58
          },
          {
            "kind": "range",
            "id": "inclination",
            "label": "inclination",
            "min": 0,
            "max": 1,
            "step": 0.01,
            "value": 0.45
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset geometry"
          }
        ],
        "defaultPreset": {
          "time": 1,
          "altitude": 0.58,
          "inclination": 0.45
        },
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "random-forest:module-13",
        "articleId": "random-forest",
        "moduleId": "module-13",
        "index": 13,
        "title": "Play with the scrollers yourself!",
        "kind": "interactive simulation/diagram module",
        "description": "Play with the scrollers yourself!",
        "controlsSummary": "play/pause",
        "responseSummary": "time progression can be paused/resumed for frame-by-frame inspection",
        "renderer": "canvas",
        "family": "random-forest",
        "visual": "projection-lab",
        "layout": "inline",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "pauseGroup": "random-forest-motion",
        "gestures": [
          "play/pause"
        ]
      }
    ]
  },
  {
    "id": "roc-auc",
    "title": "ROC & AUC",
    "author": "AWS Machine Learning University team",
    "url": "https://mlu-explain.github.io/roc-auc/",
    "lead": "Model-evaluation explainer for ROC curves and AUC interpretation under changing classification thresholds.",
    "about": [
      "Model-evaluation explainer for ROC curves and AUC interpretation under changing classification thresholds.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 5,
    "modules": [
      {
        "sceneId": "roc-auc:module-01",
        "articleId": "roc-auc",
        "moduleId": "module-01",
        "index": 1,
        "title": "ROC curve canvas",
        "kind": "chart/plot module",
        "description": "Plots TPR vs FPR as threshold sweeps across classifier scores.",
        "controlsSummary": "slider/range controls",
        "responseSummary": "active point moves on ROC curve while TPR/FPR values update",
        "renderer": "svg",
        "family": "roc-auc",
        "visual": "ml-threshold",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "threshold",
            "label": "threshold",
            "min": 0.05,
            "max": 0.95,
            "step": 0.01,
            "value": 0.52
          },
          {
            "kind": "range",
            "id": "imbalance",
            "label": "imbalance",
            "min": 0.1,
            "max": 0.9,
            "step": 0.01,
            "value": 0.35
          },
          {
            "kind": "range",
            "id": "noise",
            "label": "noise",
            "min": 0,
            "max": 0.5,
            "step": 0.01,
            "value": 0.12
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset threshold"
          }
        ],
        "defaultPreset": {
          "threshold": 0.52,
          "imbalance": 0.35,
          "noise": 0.12
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "roc-auc:module-02",
        "articleId": "roc-auc",
        "moduleId": "module-02",
        "index": 2,
        "title": "AUC interpretation overlay",
        "kind": "interactive simulation/diagram module",
        "description": "Shades area under the ROC curve and ties it to ranking quality intuition.",
        "controlsSummary": "step navigation, threshold control",
        "responseSummary": "highlighted area and explanatory annotations change with scenario",
        "renderer": "svg",
        "family": "roc-auc",
        "visual": "ml-threshold",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "threshold",
            "label": "threshold",
            "min": 0.05,
            "max": 0.95,
            "step": 0.01,
            "value": 0.52
          },
          {
            "kind": "range",
            "id": "imbalance",
            "label": "imbalance",
            "min": 0.1,
            "max": 0.9,
            "step": 0.01,
            "value": 0.35
          },
          {
            "kind": "range",
            "id": "noise",
            "label": "noise",
            "min": 0,
            "max": 0.5,
            "step": 0.01,
            "value": 0.12
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset threshold"
          }
        ],
        "defaultPreset": {
          "threshold": 0.52,
          "imbalance": 0.35,
          "noise": 0.12
        },
        "gestures": []
      },
      {
        "sceneId": "roc-auc:module-03",
        "articleId": "roc-auc",
        "moduleId": "module-03",
        "index": 3,
        "title": "Classifier comparison view",
        "kind": "chart/plot module",
        "description": "Compares multiple ROC traces to show stronger/weaker classifier behavior.",
        "controlsSummary": "toggle/select control",
        "responseSummary": "selected model trace and corresponding AUC readout update",
        "renderer": "svg",
        "family": "roc-auc",
        "visual": "ml-threshold",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "threshold",
            "label": "threshold",
            "min": 0.05,
            "max": 0.95,
            "step": 0.01,
            "value": 0.52
          },
          {
            "kind": "range",
            "id": "imbalance",
            "label": "imbalance",
            "min": 0.1,
            "max": 0.9,
            "step": 0.01,
            "value": 0.35
          },
          {
            "kind": "range",
            "id": "noise",
            "label": "noise",
            "min": 0,
            "max": 0.5,
            "step": 0.01,
            "value": 0.12
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset threshold"
          }
        ],
        "defaultPreset": {
          "threshold": 0.52,
          "imbalance": 0.35,
          "noise": 0.12
        },
        "gestures": []
      },
      {
        "sceneId": "roc-auc:module-04",
        "articleId": "roc-auc",
        "moduleId": "module-04",
        "index": 4,
        "title": "Threshold sweep panel",
        "kind": "interactive simulation/diagram module",
        "description": "Shows how moving threshold changes confusion behavior and curve location.",
        "controlsSummary": "slider/range controls",
        "responseSummary": "point trajectory and confusion-derived metrics animate through threshold space",
        "renderer": "svg",
        "family": "roc-auc",
        "visual": "ml-threshold",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "threshold",
            "label": "threshold",
            "min": 0.05,
            "max": 0.95,
            "step": 0.01,
            "value": 0.52
          },
          {
            "kind": "range",
            "id": "imbalance",
            "label": "imbalance",
            "min": 0.1,
            "max": 0.9,
            "step": 0.01,
            "value": 0.35
          },
          {
            "kind": "range",
            "id": "noise",
            "label": "noise",
            "min": 0,
            "max": 0.5,
            "step": 0.01,
            "value": 0.12
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset threshold"
          }
        ],
        "defaultPreset": {
          "threshold": 0.52,
          "imbalance": 0.35,
          "noise": 0.12
        },
        "gestures": [
          "slider/range"
        ]
      },
      {
        "sceneId": "roc-auc:module-05",
        "articleId": "roc-auc",
        "moduleId": "module-05",
        "index": 5,
        "title": "Scrollytelling transitions",
        "kind": "interactive simulation/diagram module",
        "description": "Controls teaching sequence from raw confusion concepts to ROC/AUC interpretation.",
        "controlsSummary": "scroll",
        "responseSummary": "scene state and highlights switch at each narrative step",
        "renderer": "svg",
        "family": "roc-auc",
        "visual": "ml-threshold",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "threshold",
            "label": "threshold",
            "min": 0.05,
            "max": 0.95,
            "step": 0.01,
            "value": 0.52
          },
          {
            "kind": "range",
            "id": "imbalance",
            "label": "imbalance",
            "min": 0.1,
            "max": 0.9,
            "step": 0.01,
            "value": 0.35
          },
          {
            "kind": "range",
            "id": "noise",
            "label": "noise",
            "min": 0,
            "max": 0.5,
            "step": 0.01,
            "value": 0.12
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset threshold"
          }
        ],
        "defaultPreset": {
          "threshold": 0.52,
          "imbalance": 0.35,
          "noise": 0.12
        },
        "pauseGroup": "roc-auc-motion",
        "gestures": [
          "play/pause"
        ]
      }
    ]
  },
  {
    "id": "the-bias-variance-tradeoff",
    "title": "The Bias Variance Tradeoff",
    "author": "AWS Machine Learning University team",
    "url": "https://mlu-explain.github.io/bias-variance/",
    "lead": "Bias-variance decomposition lesson connecting model complexity with underfitting/overfitting behavior.",
    "about": [
      "Bias-variance decomposition lesson connecting model complexity with underfitting/overfitting behavior.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 12,
    "modules": [
      {
        "sceneId": "the-bias-variance-tradeoff:module-01",
        "articleId": "the-bias-variance-tradeoff",
        "moduleId": "module-01",
        "index": 1,
        "title": "MLU-expl AI n",
        "kind": "interactive simulation/diagram module",
        "description": "Explains MLU-expl AI n within The Bias Variance Tradeoff using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, playback/scrub, hover",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; hover reveals contextual overlays and temporary annotations; play/pause controls time progression for...",
        "renderer": "svg",
        "family": "the-bias-variance-tradeoff",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "hover"
        ]
      },
      {
        "sceneId": "the-bias-variance-tradeoff:module-02",
        "articleId": "the-bias-variance-tradeoff",
        "moduleId": "module-02",
        "index": 2,
        "title": "The Bias Variance Tradeoff",
        "kind": "interactive simulation/diagram module",
        "description": "Specifically, variance measures how much, on average, predictions vary for a given data point : As you can see in the bottom plot, predictions from overfit (high-complexity) mod...",
        "controlsSummary": "slider/range, playback/scrub, hover",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "the-bias-variance-tradeoff",
        "visual": "bias-variance",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "complexity",
            "label": "complexity",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.9
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset curve"
          }
        ],
        "defaultPreset": {
          "complexity": 0.9
        },
        "gestures": [
          "slider/range",
          "hover"
        ]
      },
      {
        "sceneId": "the-bias-variance-tradeoff:module-03",
        "articleId": "the-bias-variance-tradeoff",
        "moduleId": "module-03",
        "index": 3,
        "title": "Jared Wilber & Brent Werness, January 2021",
        "kind": "interactive simulation/diagram module",
        "description": "Explains Jared Wilber & Brent Werness, January 2021 within The Bias Variance Tradeoff using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, playback/scrub, hover",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; hover reveals contextual overlays and temporary annotations; play/pause controls time progression for...",
        "renderer": "svg",
        "family": "the-bias-variance-tradeoff",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "slider/range",
          "hover"
        ]
      },
      {
        "sceneId": "the-bias-variance-tradeoff:module-04",
        "articleId": "the-bias-variance-tradeoff",
        "moduleId": "module-04",
        "index": 4,
        "title": "LOESS Regression",
        "kind": "interactive simulation/diagram module",
        "description": "Visualizes decomposition of model error and sensitivity to complexity/smoothing choices.",
        "controlsSummary": "slider/range, playback/scrub, hover",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; hover reveals contextual overlays and temporary annotations; play/pause controls time progression for...",
        "renderer": "svg",
        "family": "the-bias-variance-tradeoff",
        "visual": "regression-fit",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slope",
            "label": "slope",
            "min": -2,
            "max": 2,
            "step": 0.02,
            "value": 0.6
          },
          {
            "kind": "range",
            "id": "intercept",
            "label": "intercept",
            "min": -1.5,
            "max": 1.5,
            "step": 0.02,
            "value": 0.1
          },
          {
            "kind": "range",
            "id": "spread",
            "label": "spread",
            "min": 0.1,
            "max": 1.2,
            "step": 0.01,
            "value": 0.35
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset fit"
          }
        ],
        "defaultPreset": {
          "slope": 0.6,
          "intercept": 0.1,
          "spread": 0.35
        },
        "gestures": [
          "slider/range",
          "hover"
        ]
      },
      {
        "sceneId": "the-bias-variance-tradeoff:module-05",
        "articleId": "the-bias-variance-tradeoff",
        "moduleId": "module-05",
        "index": 5,
        "title": "K-Nearest Neighbors",
        "kind": "interactive simulation/diagram module",
        "description": "Hover over a point to see its classification to the right, and the K-nearest neighbors used for consideration to the left.",
        "controlsSummary": "hover",
        "responseSummary": "hover reveals contextual overlays or future trajectory hints",
        "renderer": "svg",
        "family": "the-bias-variance-tradeoff",
        "visual": "projection-lab",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "scale",
            "label": "scale",
            "min": 0.2,
            "max": 2,
            "step": 0.02,
            "value": 0.85
          },
          {
            "kind": "range",
            "id": "rotation",
            "label": "rotation",
            "min": -180,
            "max": 180,
            "step": 1,
            "value": 22
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset view"
          }
        ],
        "defaultPreset": {
          "scale": 0.85,
          "rotation": 22
        },
        "gestures": [
          "hover"
        ]
      },
      {
        "sceneId": "the-bias-variance-tradeoff:module-06",
        "articleId": "the-bias-variance-tradeoff",
        "moduleId": "module-06",
        "index": 6,
        "title": "What About Double Descent?",
        "kind": "interactive simulation/diagram module",
        "description": "Shows error-vs-complexity behavior around interpolation threshold and overparameterized regime transitions.",
        "controlsSummary": "slider/range, playback/scrub, hover",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; hover reveals contextual overlays and temporary annotations; play/pause controls time progression for...",
        "renderer": "svg",
        "family": "the-bias-variance-tradeoff",
        "visual": "double-descent",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "capacity",
            "label": "capacity",
            "min": 0.2,
            "max": 3,
            "step": 0.02,
            "value": 1.2
          },
          {
            "kind": "range",
            "id": "data",
            "label": "data ratio",
            "min": 0.4,
            "max": 2.2,
            "step": 0.02,
            "value": 1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset curve"
          }
        ],
        "defaultPreset": {
          "capacity": 1.2,
          "data": 1
        },
        "gestures": [
          "slider/range",
          "hover"
        ]
      },
      {
        "sceneId": "the-bias-variance-tradeoff:module-07",
        "articleId": "the-bias-variance-tradeoff",
        "moduleId": "module-07",
        "index": 7,
        "title": "It's Finally Over",
        "kind": "reference/narrative section",
        "description": "Narrative/reference section in The Bias Variance Tradeoff that summarizes results and links supporting resources.",
        "controlsSummary": "slider/range, playback/scrub, hover",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; hover reveals contextual overlays and temporary annotations; play/pause controls time progression for...",
        "renderer": "svg",
        "family": "the-bias-variance-tradeoff",
        "visual": "projection-lab",
        "layout": "note",
        "noteOnly": true,
        "controls": [],
        "defaultPreset": {},
        "gestures": [
          "slider/range",
          "hover"
        ]
      },
      {
        "sceneId": "the-bias-variance-tradeoff:module-08",
        "articleId": "the-bias-variance-tradeoff",
        "moduleId": "module-08",
        "index": 8,
        "title": "References + Open Source",
        "kind": "reference/narrative section",
        "description": "Narrative/reference section in The Bias Variance Tradeoff that summarizes results and links supporting resources.",
        "controlsSummary": "slider/range, playback/scrub, hover",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; hover reveals contextual overlays and temporary annotations; play/pause controls time progression for...",
        "renderer": "svg",
        "family": "the-bias-variance-tradeoff",
        "visual": "projection-lab",
        "layout": "note",
        "noteOnly": true,
        "controls": [],
        "defaultPreset": {},
        "gestures": [
          "slider/range",
          "hover"
        ]
      },
      {
        "sceneId": "the-bias-variance-tradeoff:module-09",
        "articleId": "the-bias-variance-tradeoff",
        "moduleId": "module-09",
        "index": 9,
        "title": "These different model realizations are shown in the",
        "kind": "chart/plot module",
        "description": "These different model realizations are shown in the top chart, while the error decomposition (for each point of data) is shown in the bottom chart.",
        "controlsSummary": "implicit controls",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "the-bias-variance-tradeoff",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": []
      },
      {
        "sceneId": "the-bias-variance-tradeoff:module-10",
        "articleId": "the-bias-variance-tradeoff",
        "moduleId": "module-10",
        "index": 10,
        "title": "For each level of complexity, we’ll aggregate the",
        "kind": "chart/plot module",
        "description": "For each level of complexity, we’ll aggregate the error decomposition across all data-points, and plot the aggregate errors at their level of complexity.",
        "controlsSummary": "implicit controls",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "the-bias-variance-tradeoff",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": []
      },
      {
        "sceneId": "the-bias-variance-tradeoff:module-11",
        "articleId": "the-bias-variance-tradeoff",
        "moduleId": "module-11",
        "index": 11,
        "title": "The plot on the left shows the training",
        "kind": "chart/plot module",
        "description": "The plot on the left shows the training data.",
        "controlsSummary": "implicit controls",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "the-bias-variance-tradeoff",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": []
      },
      {
        "sceneId": "the-bias-variance-tradeoff:module-12",
        "articleId": "the-bias-variance-tradeoff",
        "moduleId": "module-12",
        "index": 12,
        "title": "The plot on the right shows decision regions",
        "kind": "chart/plot module",
        "description": "The plot on the right shows decision regions based on the current value of K.",
        "controlsSummary": "implicit controls",
        "responseSummary": "plots and numeric readouts recalculate with current parameters",
        "renderer": "svg",
        "family": "the-bias-variance-tradeoff",
        "visual": "hysteresis-plot",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "range",
            "id": "slack",
            "label": "slack",
            "min": 0.02,
            "max": 0.42,
            "step": 0.01,
            "value": 0.18
          },
          {
            "kind": "range",
            "id": "damping",
            "label": "damping",
            "min": 0.4,
            "max": 0.98,
            "step": 0.01,
            "value": 0.78
          },
          {
            "kind": "range",
            "id": "drive",
            "label": "drive",
            "min": 0.4,
            "max": 2.2,
            "step": 0.05,
            "value": 1.1
          },
          {
            "kind": "action",
            "id": "reset",
            "label": "reset path"
          }
        ],
        "defaultPreset": {
          "slack": 0.18,
          "damping": 0.78,
          "drive": 1.1
        },
        "gestures": []
      }
    ]
  },
  {
    "id": "train-test-and-validation-sets",
    "title": "Train, Test, and Validation Sets",
    "author": "AWS Machine Learning University team",
    "url": "https://mlu-explain.github.io/train-test-validation/",
    "lead": "Data-splitting lesson that demonstrates training, validation, and testing roles through interactive examples.",
    "about": [
      "Data-splitting lesson that demonstrates training, validation, and testing roles through interactive examples.",
      "The teaching pattern is direct manipulation: user input changes model parameters and the visual system responds immediately."
    ],
    "moduleCount": 9,
    "modules": [
      {
        "sceneId": "train-test-and-validation-sets:module-01",
        "articleId": "train-test-and-validation-sets",
        "moduleId": "module-01",
        "index": 1,
        "title": "MLU-EXPL AI N",
        "kind": "interactive simulation/diagram module",
        "description": "Explains MLU-EXPL AI N within Train, Test, and Validation Sets using a parameterized scene that updates calculations and visuals as controls change.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "svg",
        "family": "train-test-and-validation-sets",
        "visual": "dataset-partition",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "action",
            "id": "reset",
            "label": "reset split"
          }
        ],
        "defaultPreset": {},
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "train-test-and-validation-sets:module-02",
        "articleId": "train-test-and-validation-sets",
        "moduleId": "module-02",
        "index": 2,
        "title": "Train , Test , and Validation Sets",
        "kind": "algorithm walkthrough module",
        "description": "Drag each animal in the training set to a new position to see how the boundary updates!",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "svg",
        "family": "train-test-and-validation-sets",
        "visual": "dataset-partition",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "action",
            "id": "reset",
            "label": "reset split"
          }
        ],
        "defaultPreset": {},
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "train-test-and-validation-sets:module-03",
        "articleId": "train-test-and-validation-sets",
        "moduleId": "module-03",
        "index": 3,
        "title": "The Importance of Data Splitting",
        "kind": "interactive simulation/diagram module",
        "description": "Shows candidate split boundaries and how node partitioning changes class purity and downstream tree structure.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "svg",
        "family": "train-test-and-validation-sets",
        "visual": "dataset-partition",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "action",
            "id": "reset",
            "label": "reset split"
          }
        ],
        "defaultPreset": {},
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "train-test-and-validation-sets:module-04",
        "articleId": "train-test-and-validation-sets",
        "moduleId": "module-04",
        "index": 4,
        "title": "Train, Test, and Validation Splits",
        "kind": "algorithm walkthrough module",
        "description": "Drag each animal in the training set to a new position to see how the boundary updates!",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "svg",
        "family": "train-test-and-validation-sets",
        "visual": "dataset-partition",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "action",
            "id": "reset",
            "label": "reset split"
          }
        ],
        "defaultPreset": {},
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "train-test-and-validation-sets:module-05",
        "articleId": "train-test-and-validation-sets",
        "moduleId": "module-05",
        "index": 5,
        "title": "The Training Set",
        "kind": "algorithm walkthrough module",
        "description": "Drag each animal in the training set to a new position to see how the boundary updates!",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "svg",
        "family": "train-test-and-validation-sets",
        "visual": "dataset-partition",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "action",
            "id": "reset",
            "label": "reset split"
          }
        ],
        "defaultPreset": {},
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "train-test-and-validation-sets:module-06",
        "articleId": "train-test-and-validation-sets",
        "moduleId": "module-06",
        "index": 6,
        "title": "Building Our Model",
        "kind": "algorithm walkthrough module",
        "description": "Drag the pets across the line to see how the model performance updates!",
        "controlsSummary": "drag",
        "responseSummary": "dragging repositions objects/camera and recomputes geometry instantly",
        "renderer": "svg",
        "family": "train-test-and-validation-sets",
        "visual": "dataset-partition",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "action",
            "id": "reset",
            "label": "reset split"
          }
        ],
        "defaultPreset": {},
        "gestures": [
          "drag"
        ]
      },
      {
        "sceneId": "train-test-and-validation-sets:module-07",
        "articleId": "train-test-and-validation-sets",
        "moduleId": "module-07",
        "index": 7,
        "title": "The Validation Set",
        "kind": "algorithm walkthrough module",
        "description": "Shows data split roles and how model selection/evaluation differs across train, validation, and test partitions.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "svg",
        "family": "train-test-and-validation-sets",
        "visual": "dataset-partition",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "action",
            "id": "reset",
            "label": "reset split"
          }
        ],
        "defaultPreset": {},
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "train-test-and-validation-sets:module-08",
        "articleId": "train-test-and-validation-sets",
        "moduleId": "module-08",
        "index": 8,
        "title": "The Testing Set",
        "kind": "algorithm walkthrough module",
        "description": "Shows data split roles and how model selection/evaluation differs across train, validation, and test partitions.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "svg",
        "family": "train-test-and-validation-sets",
        "visual": "dataset-partition",
        "layout": "chart",
        "noteOnly": false,
        "controls": [
          {
            "kind": "action",
            "id": "reset",
            "label": "reset split"
          }
        ],
        "defaultPreset": {},
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      },
      {
        "sceneId": "train-test-and-validation-sets:module-09",
        "articleId": "train-test-and-validation-sets",
        "moduleId": "module-09",
        "index": 9,
        "title": "Summary",
        "kind": "reference/narrative section",
        "description": "Narrative/reference section in Train, Test, and Validation Sets that summarizes results and links supporting resources.",
        "controlsSummary": "slider/range, drag, click/tap",
        "responseSummary": "moving sliders continuously updates model parameters and redraws the scene; dragging manipulates object/camera state and recomputes geometry instantly; click/tap actions switch ...",
        "renderer": "svg",
        "family": "train-test-and-validation-sets",
        "visual": "dataset-partition",
        "layout": "note",
        "noteOnly": true,
        "controls": [],
        "defaultPreset": {},
        "gestures": [
          "slider/range",
          "drag",
          "click/tap"
        ]
      }
    ]
  }
] as InteractiveArticleDescriptor[]

export const GENERATED_MODULE_SCENE_MAP = Object.fromEntries(
  GENERATED_INTERACTIVE_ARTICLES.flatMap((article) =>
    article.modules.map((module) => [module.sceneId, module] as const),
  ),
) as Record<string, InteractiveArticleDescriptor["modules"][number]>
