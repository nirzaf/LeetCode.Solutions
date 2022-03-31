using static System.Console;
using static System.Int32;

string[] ops1 = { "5", "2", "C", "D", "+" };
string[] ops2 = { "5", "-2", "4", "C", "D", "9", "+", "+" };
string[] ops3 = { "1" };

WriteLine(CalculatePoints(ops1));
WriteLine(CalculatePoints(ops2));
WriteLine(CalculatePoints(ops3));


static int CalculatePoints(IEnumerable<string> ops)
{
    Stack<int> stack = new();

    foreach (var op in ops)
    {
        switch (op)
        {
            case "+"
                : //Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores
            {
                int top = stack.Pop();
                int newTop = top + stack.Peek();
                stack.Push(top);
                stack.Push(newTop);
                break;
            }
            case "C"
                : //Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.
                stack.Pop();
                break;
            case "D"
                : //Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
                stack.Push(2 * stack.Peek());
                break;
            default:
            {
                if (TryParse(op, out int intOp))
                    stack.Push(intOp);
                break;
            }
        }
    }

    return stack.Aggregate(0, (current, score) => current + score);
}