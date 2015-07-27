---
title: Mathematics
layout: default
category: Inclusive EPUB 3
---
Traditionally, math is challenging to render and to make accessible - thankfully in EPUB, there are techniques we can employ to provide multiple ways of perceiving and understanding math notation.

To encode math and math notations, we will be using MathML 3.0 which is a W3C specification (Link: <a class="link-external" href="http://www.w3.org/Math/">W3C Math Home</a>) that is widely supported by modern-day EPUB reader systems. To see how MathML works, let's use this physics formula for the force of gravity as an example: f<sub>g</sub> = mg.

```
<math xmlns="http://www.w3.org/1998/Math/MathML">
	<mrow>
		<msub>
			<mi>f</mi>
			<mi>g</mi>
		</msub>
		<mo>=</mo>
		<mi>m</mi>
		<mi>g</mi>
	</mrow>
</math>
```

When viewed in an EPUB the formula looks great as seen in the following image: ![Image of the equation F subscript g equals m times g](/images/Equation.png)

However, for someone using a screen reader or another accessibility tool, the formula may appear or sound like "f g equals m g" which is ambiguous. Is that "f g as in f *times* g" or is it "fg a variable"? To clear up any misunderstanding, it is recommended that a literal description be added using the `aria-label` property. It is important to not interpret or impart meaning to the description as this may cause some confusion - be as literal as possible and add just enough information to remove ambiguity.

In our example f<sub>g</sub> = mg example, a good literal description would be: "f subscript g equals m times g".

```
<math xmlns="http://www.w3.org/1998/Math/MathML"
    aria-label="f subscript g equals m times g">
    <mrow>
        <msub>
            <mi>f</mi>
            <mi>g</mi>
        </msub>
        <mo>=</mo>
        <mi>m</mi>
        <mi>g</mi>
    </mrow>
</math>
```

This is a good start, however someone may not be familiar with the subject matter or have cognitive considerations - this may require some additional details as a literal description alone lacks any context or elaboration.

* See [Cognitive considerations](/CognitiveConsiderations.html) for more information on creating more inclusive text and content.

Using the `aria-describedby` property, we can link math formulas and equations to a more detailed explanation.

```
<math xmlns="http://www.w3.org/1998/Math/MathML"
    aria-label="f subscript g equals m times g"
    aria-describedby="formulaDescription">
    <mrow>
        <msub>
            <mi>f</mi>
            <mi>g</mi>
        </msub>
        <mo>=</mo>
        <mi>m</mi>
        <mi>g</mi>
    </mrow>
</math>

<p id="formulaDescription">
    The force of gravity acting on an object can be
    calculated by multiplying the mass of the
    object and the gravitational constant.
</p>
```

To ensure that standard compliant reader systems understand your math content, we wrap the `<math></math>` content in a container (a `<span>`, `<div>`, or `<p>`) and give it a math role.

```
<span role="math">
    <math xmlns="http://www.w3.org/1998/Math/MathML"
        aria-label="f subscript g equals m times g"
        aria-describedby="formulaDescription">
        <mrow>
            <msub>
                <mi>f</mi>
                <mi>g</mi>
            </msub>
            <mo>=</mo>
            <mi>m</mi>
            <mi>g</mi>
        </mrow>
    </math>
 </span>
<p id="formulaDescription">
    The force of gravity acting on an object can be
    calculated by multiplying the mass of the
    object and the gravitational constant.
</p>
```

## Units, Measurements, and Acronyms ##

Units and measurements poses their own unique challenge as units are often written in abbreviated form. For example, the letter "m" may mean "mass" or "metres" - both which may appear simultaneously in the content. To remove any ambiguity, the following technique would help clarify the intended meaning:

* For units within sections of MathML `<math> </math>`, use `<mn mathvariant='normal' class='epub-mathML-Unit'>kg</mn>`, mathvariant "normal" ensures that the unit notation does not render the same way as a number, making it distinct. epub-mathML-Unit is an example optional class you can use for styling.
* For units within rest of content and outside of `<math>` blocks, use `<abbr>` for unit abbreviations with WAI-ARIA aria-label values. For example:
   * `<abbr role="text" title="kilograms" aria-label="kilograms">kg</abbr>`
   * `<abbr role="text" title="meters per second" aria-label="meters per second">m/s</abbr>`
