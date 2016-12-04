public class Randomizer
{
    private Random random = new Random();

    public int GivenFunction()
    {
        return random.Next(1, 6);
    }

    public int MagicFunction()
    {
        var bigRandom = GivenFunction() * 100000
            + GivenFunction() * 10000
            + GivenFunction() * 1000
            + GivenFunction() * 100
            + GivenFunction() * 10
            + GivenFunction();

        return (bigRandom % 7) + 1;
    }
}
