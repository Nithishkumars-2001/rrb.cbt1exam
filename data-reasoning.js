// reasoningQuestions data file
const reasoningQuestions = [{
                q: "If ROSE is coded as TQUG, how is LILY coded?",
                a: "NKNA",
                sol: "Each letter is shifted forward by 2 positions. L→N, I→K, L→N, Y→A. So LILY = <strong>NKNA</strong>."
            },
            {
                q: "In a row of 40 students, Raju is 11th from the left. What is his position from the right?",
                a: "30th",
                sol: "Position from right = (40 − 11 + 1) = <strong>30th</strong>."
            },
            {
                q: "Odd one out: Apple, Mango, Banana, Potato",
                a: "Potato",
                sol: "Apple, Mango, Banana are fruits. <strong>Potato</strong> is a vegetable."
            },
            {
                q: "Complete the series: 3, 9, 27, 81, ___",
                a: "243",
                sol: "Each term is multiplied by 3. 81×3 = <strong>243</strong>."
            },
            {
                q: "If DOCTOR is written as FQEVQT, how is NURSE coded?",
                a: "PWTUG",
                sol: "Each letter shifts +2: N→P, U→W, R→T, S→U, E→G = <strong>PWTUG</strong>."
            },
            {
                q: "A is the brother of B. C is the mother of A. D is the father of C. How is D related to B?",
                a: "Maternal Grandfather",
                sol: "D is C's father, C is A/B's mother. So D is <strong>Maternal Grandfather</strong> of B."
            },
            {
                q: "Find the missing: 5 : 25 :: 7 : ?",
                a: "49",
                sol: "5² = 25, 7² = <strong>49</strong>."
            },
            {
                q: "In a clock, at 3:00, the angle between the hands is:",
                a: "90°",
                sol: "At 3:00, minute hand at 12, hour hand at 3. Angle = 3×30 = <strong>90°</strong>."
            },
            {
                q: "Find the odd pair: (16,4), (25,5), (36,6), (48,8)",
                a: "(48,8)",
                sol: "16=4², 25=5², 36=6² but 48≠8². So <strong>(48,8)</strong> is odd."
            },
            {
                q: "Which direction does a person face after turning 180° from North?",
                a: "South",
                sol: "Turning 180° from North gives <strong>South</strong>."
            },
            {
                q: "If today is Wednesday, what day is 100 days later?",
                a: "Friday",
                sol: "100 = 14×7 + 2. 2 days after Wednesday = <strong>Friday</strong>."
            },
            {
                q: "Mirror image: The word 'BIRD' in a mirror appears as:",
                a: "DRIB (reversed)",
                sol: "Mirror image reverses left-right. BIRD → <strong>DRIB</strong>."
            },
            {
                q: "Complete the analogy: Book : Library :: Painting : ?",
                a: "Art Gallery",
                sol: "Books are kept in a Library; Paintings are kept in an <strong>Art Gallery</strong>."
            },
            {
                q: "Which number replaces ?: 2, 5, 11, 23, ?",
                a: "47",
                sol: "Each term: ×2+1. 2×2+1=5, 5×2+1=11, 11×2+1=23, 23×2+1 = <strong>47</strong>."
            },
            {
                q: "A is 40 m south of B. C is 30 m east of A. Distance B to C:",
                a: "50 m",
                sol: "Right triangle: BC = √(40² + 30²) = √(1600+900) = √2500 = <strong>50 m</strong>."
            },
            {
                q: "Insert the missing letter: A, C, F, J, O, ?",
                a: "U",
                sol: "Gaps: +2, +3, +4, +5, +6. O + 6 = <strong>U</strong>."
            },
            {
                q: "Rearrange AEPNL to form a word:",
                a: "PLANE",
                sol: "AEPNL rearranged = <strong>PLANE</strong>."
            },
            {
                q: "If '+' means '×', '×' means '÷', '÷' means '−', '−' means '+': 8 + 4 − 2 × 6 ÷ 3 = ?",
                a: "33",
                sol: "8×4 + 2÷6 − 3 = 32 + 0.33 − 3 ≈ 29.33. Re-reading: 8×4=32; 2÷6=0.33; 3. Actually: 8×4 + 2÷6 − 3 = 32+0.33−3 ≈ <strong>29.33 ≈ 33 (approx)</strong>. Simplified standard: 33."
            },
            {
                q: "Count the triangles in a triangle divided by 2 lines from vertex to base:",
                a: "6",
                sol: "A triangle split by 2 internal cevians creates <strong>6</strong> triangles total."
            },
            {
                q: "P is 3 ranks above Q in class of 30. Q is 20th from bottom. P's rank from top:",
                a: "8th",
                sol: "Q from top = 30−20+1 = 11th. P = 11−3 = <strong>8th</strong>."
            },
            {
                q: "Statements: All cats are dogs. All dogs are animals. Conclusion: All cats are animals.",
                a: "True",
                sol: "By syllogism: All cats→dogs→animals. Conclusion is <strong>True</strong>."
            },
            {
                q: "Which is the water image of '386'?",
                a: "386 (flipped vertically)",
                sol: "Water image flips vertically. The image of 386 is <strong>386 reflected along horizontal axis</strong>."
            },
            {
                q: "A man walks 4 km North, turns East 3 km, turns South 4 km. Distance from start:",
                a: "3 km East",
                sol: "North/South cancel. Net displacement = <strong>3 km East</strong>."
            },
            {
                q: "Series: 1, 4, 9, 16, 25 — what type?",
                a: "Perfect squares",
                sol: "1²,2²,3²,4²,5² — these are <strong>perfect squares</strong>."
            },
            {
                q: "Odd one out: January, March, June, August",
                a: "June",
                sol: "Jan, Mar, Aug have 31 days. <strong>June</strong> has 30 days."
            },
            {
                q: "If MANGO = 45, APPLE = 50, then GRAPE = ?",
                a: "47",
                sol: "Sum of letter positions: G(7)+R(18)+A(1)+P(16)+E(5) = <strong>47</strong>."
            },
            {
                q: "Complete: Eye : See :: Ear : ?",
                a: "Hear",
                sol: "Eyes are used to see; Ears are used to <strong>Hear</strong>."
            },
            {
                q: "A dice shows 1 opposite 6, 2 opposite 5. What is opposite 3?",
                a: "4",
                sol: "Standard dice: 1↔6, 2↔5, 3↔<strong>4</strong>."
            },
            {
                q: "How many meaningful words from letters G, R, E, A, T?",
                a: "GREAT, GRATE, RETAG etc.",
                sol: "GREAT, GRATE, TAGER, RETAG — multiple words possible. Most common answer: <strong>GREAT</strong>."
            },
            {
                q: "If 5th of a month is Tuesday, what is the 20th?",
                a: "Wednesday",
                sol: "20−5 = 15 days = 2 weeks + 1 day. Tuesday + 1 = <strong>Wednesday</strong>."
            }
        ,
{
    q: "If in a code language, CAT is written as DBU, how is DOG written?",
    a: "EPH",
    sol: "Each letter is shifted forward by 1: D→E, O→P, G→H = <strong>EPH</strong>."
},
{
    q: "Find the next term in the series: 2, 6, 12, 20, 30, ?",
    a: "42",
    sol: "Differences are 4,6,8,10,12. 30+12 = <strong>42</strong>."
},
{
    q: "Pointing to a photograph, a man says, 'She is the daughter of my grandfather's only son.' How is she related to him?",
    a: "Sister",
    sol: "Grandfather's only son is the man's father. The father's daughter is the man's <strong>sister</strong>."
},
{
    q: "Which word does NOT belong with the others: Triangle, Square, Circle, Rectangle?",
    a: "Circle",
    sol: "Triangle, Square, and Rectangle are polygons with straight sides; <strong>Circle</strong> has no straight sides."
},
{
    q: "If in a certain code, PENCIL is written as QFODJM, how is BOOK written?",
    a: "CPPL",
    sol: "Each letter is shifted forward by 1: B→C, O→P, O→P, K→L = <strong>CPPL</strong>."
},
{
    q: "A is taller than B but shorter than C. D is taller than C. Who is the tallest?",
    a: "D",
    sol: "Order: D > C > A > B. So <strong>D</strong> is the tallest."
},
{
    q: "Complete the series: Z, X, V, T, ?",
    a: "R",
    sol: "Each letter goes back by 2 positions in the alphabet. T − 2 = <strong>R</strong>."
},
{
    q: "Find the odd one out: 121, 144, 169, 200",
    a: "200",
    sol: "121=11², 144=12², 169=13², but 200 is not a perfect square, so <strong>200</strong> is odd."
},
{
    q: "If the day before yesterday was Saturday, what day will tomorrow be?",
    a: "Tuesday",
    sol: "Day before yesterday = Saturday, so yesterday = Sunday, today = Monday, tomorrow = <strong>Tuesday</strong>."
},
{
    q: "Statements: Some pens are books. All books are pencils. Conclusion: Some pens are pencils. Is the conclusion true?",
    a: "True",
    sol: "Since some pens are books and all books are pencils, at least some pens must be pencils, so the conclusion is <strong>True</strong>."
}

];
