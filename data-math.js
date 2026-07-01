// mathQuestions data file
const mathQuestions = [{
                q: "A train travels 360 km in 4 hours. What is its speed in km/h?",
                a: "90 km/h",
                sol: "Speed = Distance ÷ Time = 360 ÷ 4 = <strong>90 km/h</strong>."
            },
            {
                q: "Find the LCM of 12, 18 and 24.",
                a: "72",
                sol: "12 = 2²×3, 18 = 2×3², 24 = 2³×3. LCM = 2³×3² = 8×9 = <strong>72</strong>."
            },
            {
                q: "The simple interest on ₹5,000 at 8% per annum for 3 years is:",
                a: "₹1,200",
                sol: "SI = (P×R×T)/100 = (5000×8×3)/100 = 120000/100 = <strong>₹1,200</strong>."
            },
            {
                q: "A number is increased by 20% and then decreased by 20%. Net change is:",
                a: "4% decrease",
                sol: "Let number = 100. After 20% increase: 120. After 20% decrease: 120×0.8 = 96. Net change = <strong>4% decrease</strong>."
            },
            {
                q: "If 3x − 7 = 14, find x.",
                a: "7",
                sol: "3x = 14 + 7 = 21. x = 21/3 = <strong>7</strong>."
            },
            {
                q: "The average of 5 numbers is 18. If one number is removed, the average becomes 16. Find the removed number.",
                a: "26",
                sol: "Sum of 5 = 5×18 = 90. Sum of 4 = 4×16 = 64. Removed = 90 − 64 = <strong>26</strong>."
            },
            {
                q: "A shopkeeper marks an article 40% above cost price and gives 25% discount. Find the profit %.",
                a: "5%",
                sol: "CP = 100, MP = 140. SP = 140×0.75 = 105. Profit% = (105−100)/100×100 = <strong>5%</strong>."
            },
            {
                q: "The ratio of two numbers is 3:5 and their sum is 96. Find the larger number.",
                a: "60",
                sol: "Larger = (5/8)×96 = <strong>60</strong>."
            },
            {
                q: "What is 15% of 840?",
                a: "126",
                sol: "15% of 840 = (15/100)×840 = <strong>126</strong>."
            },
            {
                q: "A pipe fills a tank in 6 hours; another empties it in 10 hours. Both open together — time to fill?",
                a: "15 hours",
                sol: "Net rate = 1/6 − 1/10 = 5/30 − 3/30 = 2/30 = 1/15. Time = <strong>15 hours</strong>."
            },
            {
                q: "Find the area of a rectangle with length 18 m and breadth 12 m.",
                a: "216 m²",
                sol: "Area = l × b = 18 × 12 = <strong>216 m²</strong>."
            },
            {
                q: "If A can do a work in 12 days and B in 18 days, how long together?",
                a: "7.2 days",
                sol: "Combined rate = 1/12 + 1/18 = 3/36 + 2/36 = 5/36. Time = 36/5 = <strong>7.2 days</strong>."
            },
            {
                q: "A train 200 m long passes a pole in 10 seconds. Its speed in km/h is:",
                a: "72 km/h",
                sol: "Speed = 200/10 = 20 m/s = 20×18/5 = <strong>72 km/h</strong>."
            },
            {
                q: "Find the HCF of 48 and 72.",
                a: "24",
                sol: "48 = 2⁴×3, 72 = 2³×3². HCF = 2³×3 = <strong>24</strong>."
            },
            {
                q: "Compound interest on ₹10,000 at 10% per annum for 2 years:",
                a: "₹2,100",
                sol: "A = 10000×(1.1)² = 10000×1.21 = 12100. CI = 12100−10000 = <strong>₹2,100</strong>."
            },
            {
                q: "A and B start a business investing ₹20,000 and ₹30,000. B's share in ₹25,000 profit is:",
                a: "₹15,000",
                sol: "Ratio = 2:3. B's share = (3/5)×25000 = <strong>₹15,000</strong>."
            },
            {
                q: "The perimeter of a square is 64 cm. Its area is:",
                a: "256 cm²",
                sol: "Side = 64/4 = 16 cm. Area = 16² = <strong>256 cm²</strong>."
            },
            {
                q: "If 6 men can finish a work in 10 days, how many days for 4 men?",
                a: "15 days",
                sol: "M₁D₁ = M₂D₂ → 6×10 = 4×D₂ → D₂ = <strong>15 days</strong>."
            },
            {
                q: "A number when divided by 5 gives quotient 12 and remainder 3. The number is:",
                a: "63",
                sol: "Number = 5×12 + 3 = 60 + 3 = <strong>63</strong>."
            },
            {
                q: "√576 = ?",
                a: "24",
                sol: "24×24 = 576. So √576 = <strong>24</strong>."
            },
            {
                q: "The cost price of 10 pens is equal to the selling price of 8 pens. Profit %:",
                a: "25%",
                sol: "Let CP of each = 8. SP of 8 = CP of 10 = 80. SP per pen = 10. Profit% = (10−8)/8×100 = <strong>25%</strong>."
            },
            {
                q: "A 180 m long train crosses a 120 m bridge in 15 seconds. Speed in km/h:",
                a: "72 km/h",
                sol: "Distance = 180+120 = 300 m. Speed = 300/15 = 20 m/s = <strong>72 km/h</strong>."
            },
            {
                q: "What sum doubles itself in 10 years at simple interest?",
                a: "10% p.a.",
                sol: "SI = P (doubles means SI = P). Rate = (SI×100)/(P×T) = 100/(1×10) = <strong>10% p.a.</strong>."
            },
            {
                q: "The difference between compound and simple interest for 2 years at 5% on ₹4,000 is:",
                a: "₹10",
                sol: "SI = 4000×5×2/100 = 400. CI = 4000((1.05)²−1) = 4000×0.1025 = 410. Diff = <strong>₹10</strong>."
            },
            {
                q: "A boat goes 30 km upstream in 6 hours, same distance downstream in 3 hours. Speed of stream:",
                a: "2.5 km/h",
                sol: "US speed = 5, DS speed = 10. Stream = (10−5)/2 = <strong>2.5 km/h</strong>."
            },
            {
                q: "Find the missing number in the series: 2, 6, 18, 54, ___",
                a: "162",
                sol: "Each term is multiplied by 3. 54×3 = <strong>162</strong>."
            },
            {
                q: "A shopkeeper buys 100 oranges for ₹150 and sells at ₹2 each. Profit %:",
                a: "33.33%",
                sol: "CP = ₹1.50 each. SP = ₹2. Profit = 0.50. Profit% = (0.50/1.50)×100 = <strong>33.33%</strong>."
            },
            {
                q: "The sum of first 20 natural numbers is:",
                a: "210",
                sol: "Sum = n(n+1)/2 = 20×21/2 = <strong>210</strong>."
            },
            {
                q: "Two numbers are in ratio 4:7. If their difference is 12, the larger number is:",
                a: "28",
                sol: "Difference = 7k−4k = 3k = 12 → k = 4. Larger = 7×4 = <strong>28</strong>."
            },
            {
                q: "If 20% of x = 80, then x =?",
                a: "400",
                sol: "0.20 × x = 80 → x = 80/0.20 = <strong>400</strong>."
            }
        ,
{
    q: "Find the value of 25% of 640.",
    a: "160",
    sol: "25% of 640 = (25/100)×640 = <strong>160</strong>."
},
{
    q: "A sum becomes triple itself in 8 years at simple interest. Find the rate of interest.",
    a: "25% per annum",
    sol: "SI = 2P (since sum triples, gain = 2P). Rate = (SI×100)/(P×T) = (2×100)/8 = <strong>25% per annum</strong>."
},
{
    q: "Two trains 150 m and 100 m long run in opposite directions at 54 km/h and 36 km/h. Find the time taken to cross each other.",
    a: "10 seconds",
    sol: "Relative speed = 54+36 = 90 km/h = 25 m/s. Total length = 250 m. Time = 250/25 = <strong>10 seconds</strong>."
},
{
    q: "If x:y = 3:4 and y:z = 5:6, find x:y:z.",
    a: "15:20:24",
    sol: "Make y equal: x:y = 15:20, y:z = 20:24. So x:y:z = <strong>15:20:24</strong>."
},
{
    q: "A man's income increased from ₹20,000 to ₹25,000. Find the percentage increase.",
    a: "25%",
    sol: "Increase = 5000. Percentage = (5000/20000)×100 = <strong>25%</strong>."
},
{
    q: "Find the compound interest on ₹8,000 at 5% per annum for 2 years, compounded annually.",
    a: "₹820",
    sol: "A = 8000×(1.05)² = 8000×1.1025 = 8820. CI = 8820−8000 = <strong>₹820</strong>."
},
{
    q: "Find the average of the first 10 odd natural numbers.",
    a: "10",
    sol: "First 10 odd numbers: 1 to 19, sum = 100. Average = 100/10 = <strong>10</strong>."
},
{
    q: "A can complete a work in 15 days, B in 10 days. If they work together for 4 days, what fraction of the work remains?",
    a: "1/3",
    sol: "Combined rate = 1/15 + 1/10 = 5/30 = 1/6 per day. In 4 days = 4/6 = 2/3 done. Remaining = <strong>1/3</strong>."
},
{
    q: "Simplify: 3/4 + 2/5 − 1/2",
    a: "13/20",
    sol: "LCM of 4,5,2 = 20. 15/20 + 8/20 − 10/20 = 13/20 = <strong>13/20</strong>."
},
{
    q: "Find the value of 7! (7 factorial).",
    a: "5040",
    sol: "7! = 7×6×5×4×3×2×1 = <strong>5040</strong>."
}

];
