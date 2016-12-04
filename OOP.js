/**
  Static initializer
*/

public class Test {
    private static final int a;    
    static {
        a = 5;
        doSomething(a);
    }
    private static int doSomething(int x) {
        return (x+5);
    }
}

an instance of the class is created,
a static method of the class is invoked,
a static field of the class is assigned,
a non-constant static field is used, or
for a top-level class, an assert statement lexically nested within the class is executed.

inheritance (IS-A relationship), or object composition (HAS-A relationship)

/**
 * Multiple inhertitance
 */

public abstract class AbstractHorse implements Equidae {}
public class Horse extends AbstractHorse {}
public class Pegasus extends AbstractHorse implements Avialae {}


delegation: When my object uses another objects functionality as is without changing it.
composition: My object consists of other objects which in turn cannot exist after my object is destroyed-garbage collected.
aggregation: My object consists of other objects which can live even after my object is destroyed

 public, protected, and private in abstract classes
 final static


 OOP features:
 Encapsulation
 Polymorphisem
 inhertitance
 abstraction
