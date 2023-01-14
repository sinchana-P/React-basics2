1. Why do we need to `import React from "react"` in our files?
ans. coz JSX syntax is defined in REACT

2. If I were to console.log(page) in index.js, what would show up?
ans. A JavaScript object. these are React elements that describe what React should
eventually add to the real DOM for us.

o/p:
›
{type: "div"
, key: null
, ref: null
, props: {children: [{type: "img"
, key: null
, ref: null
, props: {src: "./react-logo.png"
, width: "40px"
}
, _owner: null
, _store: {}
}
, {type: "h1"
, key: null
, ref: null
, props: {children: "Fun facts about React"
}
, _owner: null
, _store: {}
}
, {type: "ul"
, key: null
, ref: null
, props: {children: [{type: "li"
, key: null
, ref: null
, props: {children: "Was first released in 2013"
}
, _owner: null
, _store: {}
}
, {type: "li"
, key: null
, ref: null
, props: {children: "Was originally created by Jordan Walke"
}
, _owner: null
, _store: {}
}
, {type: "li"
, key: null
, ref: null
, props: {children: "Has well over 100K stars on GitHub"
}
, _owner: null
, _store: {}
}
, {type: "li"
, key: null
, ref: null
, props: {children: "Is maintained by Facebook"
}
, _owner: null
, _store: {}
}
, {type: "li"
, key: null
, ref: null
, props: {children: "Powers thousands of enterprise apps, including mobile apps"
}
, _owner: null
, _store: {}
}
]
}
, _owner: null
, _store: {}
}
]
}
, _owner: null
, _store: {}
}

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```

ans. We need our JSX to be nested under a single parent element (eg. <div></div>)


4. What does it mean for something to be "declarative" instead of "imperative"?
ans. Declarative means I can tell the computer WHAT to do 
and expect it to handle the details. Imperative means I need
to tell it HOW to do each step.

5. What does it mean for something to be "composable"?
ans. We have small pieces that we can put together to make something
larger/greater than the individual pieces.