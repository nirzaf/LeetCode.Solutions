using static System.Console;

int[] arr1 = { 1, 2, 3 };

int[] arr2 = { 1, 1, 3, 3, 5, 5, 7, 7 };

int[] arr3 = { 1, 3, 2, 3, 5, 0 };

int[] arr4 = { 1, 1, 2, 2 };

int[] arr5 = { 1, 1, 2 };


static int ElementCounter(int[] arr)
{
    var unique = arr.Distinct();
    return (from item in unique where arr.Contains(item + 1) select arr.Count(x => x == item)).ToList().Sum();
}

WriteLine(ElementCounter(arr1));
WriteLine(ElementCounter(arr2));
WriteLine(ElementCounter(arr3));
WriteLine(ElementCounter(arr4));
WriteLine(ElementCounter(arr5));