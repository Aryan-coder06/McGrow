// types/laserflow.d.ts

import * as React from "react";

// Match the EXACT import path you use in Hero.tsx
declare module "@/components/LaserFlow.jsx" {
  const C: React.ComponentType<any>;
  export default C;
}

// Optional: if you might import other .jsx files, keep this helper too:
declare module "*.jsx" {
  const C: React.ComponentType<any>;
  export default C;
}
