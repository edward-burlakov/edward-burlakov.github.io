/**
 * Created by bes on 09.01.2016.
 */
public class Loader2 {
    public static void main(String[] args) {
        Integer dimaAge = 44;
        Integer mishaAge = 10;
        Integer vasyaAge = 15;

        Integer oldest ;
        Integer youngest ;
        Integer middle ;

        if (vasyaAge < mishaAge && vasyaAge < dimaAge) {
            youngest = vasyaAge;
            System.out.println("Вася - пионер из пионеров.");
            if (mishaAge < dimaAge) {
                middle = mishaAge;
                oldest = dimaAge;
            }
            else {
                middle = dimaAge;
                oldest = mishaAge;
            }
        }
        else {
            if (dimaAge < mishaAge && dimaAge < vasyaAge) {
                     youngest = dimaAge;
                     System.out.println("Дима - пионер из пионеров.");
                     if (mishaAge < vasyaAge) {
                         middle = mishaAge;
                         oldest = vasyaAge;
                     }
                     else {
                         middle = vasyaAge;
                         oldest = mishaAge;
                     }
            }
            else {  // Вася и Дима - не самые молодые . Мише повезло - можно не проверять.
                    youngest = mishaAge;
                    System.out.println("Миша - пионер из пионеров.");
                    if (vasyaAge < dimaAge) {
                        middle = vasyaAge;
                        oldest = dimaAge;
                    }
                    else {
                        middle = dimaAge;
                        oldest = vasyaAge;
                    }
            }
        }
        System.out.println("Most old:    " + oldest);
        System.out.println("Most young:  " + youngest);
        System.out.println("Middle:      " + middle);
    }
}



