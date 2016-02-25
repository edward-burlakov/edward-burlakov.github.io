
public class Loader {
    public static void main(String[] args) {
        Integer milkAmount = 1000; // ml
        Integer powderAmount = 500; // g
        Integer eggsCount = 3; // items
        Integer sugarAmount = 15; // g
        Integer oilAmount = 30; // ml
        Integer appleCount = 8;

        //powder - 400 g, sugar - 10 g, milk - 1 l, oil - 30 ml
        if ((powderAmount >= 400) && (sugarAmount >= 10) && (milkAmount >= 1000) && (oilAmount >= 30)) {
        System.out.println("Получатся замечательные блины!");
        }
            else {
            System.out.println(" Для яблочного пирога Вам придется докупить продукты.");
            }

        //milk - 300 ml, powder - 5 g, eggs - 5
       if ((milkAmount >= 300) && (powderAmount >= 5) && (eggsCount >= 5)) {
           System.out.println("Получится чудесный омлет!");
       }
            else {
            System.out.println("Для омлета Вам придется докупить продукты. ");
            }

        //apples - 3, milk - 100 ml, powder - 300 g, eggs - 4
        if ((appleCount >= 3) && (milkAmount >= 100) && (powderAmount >= 300) && (eggsCount >= 4)) {
        System.out.println("Получится отличный яблочный пирог!");
        }
            else {
            System.out.println("Для яблочного пирога Вам придется докупить продукты.");
            }
    }
}