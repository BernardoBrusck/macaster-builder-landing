# Liquid Glass: The Shader/Displacement Approach
*Based on the principles of Shader-based Liquid Glass (e.g. React Native Skia).*

## 1. The Core Concept
The "Liquid Glass" effect, as described in high-end shader tutorials (like for React Native Skia), relies on **Displacement Maps**.
It does NOT rely on simple `backdrop-filter: blur`. Standard blur is "Frosted Glass", not "Liquid Glass".

**Liquid Glass** is defined by:
1.  **Refraction (Displacement)**: Light (and the background image) bends as it passes through the "liquid".
2.  **Turbulence (Noise)**: The bending is distinct and organic, not uniform.
3.  **Transparency**: The material itself is clear. The visibility comes from the *distortion* and *specular reflections*.

## 2. Translating to the Web (DOM)
React Native uses Skia Shaders (`Skia.Shader`).
On the Web, the native equivalent for DOM elements (HTML) is **SVG Filters**.
Specifically:
-   `feTurbulence`: Generates the Perlin/Fractal noise (the "Liquid" map).
-   `feDisplacementMap`: Uses that noise to shift the pixels of the element (or the background) to simulate refraction.

## 3. The "Correct" Implementation Plan
We must abandon the "Layered Blur" approach if it looks like frosted plastic.
We will build a **Refractive Element**.

### A. The Filter (The Engine)
```xml
<filter id="liquid-refraction">
  <!-- Generate smooth liquid noise -->
  <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
  
  <!-- Displace the source graphic (or backdrop) by the noise -->
  <!-- scale controls the "refractive index" / intensity -->
  <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
</filter>
```

### B. The CSS Integration
To apply this to the *background* of an element without distorting the element's border or text:
1.  The Component must have a **Backdrop Layer**.
2.  This layer typically needs to mimic the background image (for perfect refraction) OR use `backdrop-filter` IF the browser supports distorting it.
3.  Since browser support for `filter: url()` on `backdrop-filter` results varies (and often fails to distort the blur), the **"Pseudo-Refraction"** technique is safer:
    -   Use a high-quality **Glass Overlay** (Gradients, Borders) to sell the effect.
    -   Apply the **Distortion** to a semi-transparent fill or a cloned background if possible.
    -   Crucially: **Keep the Alpha LOW**. Liquid is clear.

### C. Visual Style (The Look)
-   **Background**: `rgba(255, 255, 255, 0.02)` (Virtually transparent).
-   **Blur**: `0px` or very low (`2px`). Real liquid is clear, not blurry.
-   **Border**: High-contrast, shiny white.
-   **Reflection**: Strong white specular highlights.

## 4. Resetting the Code
We will strip the complex "Layer 0, Layer 1" logic if it caused clipping.
We will position the element safely using standard CSS layout (or high relative positioning).
We will re-apply the filter with a focus on **subtlety** and **clarity**.
