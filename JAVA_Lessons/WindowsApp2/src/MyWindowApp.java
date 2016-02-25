import javax.swing.JFrame;

/**
 * Created by bes on 02.01.2016.
 */

    public class MyWindowApp extends JFrame { //Наследуя от JFrame мы получаем всю функциональность окна

        public MyWindowApp(){
            // super("My First Window"); //Заголовок окна
            setBounds(200, 200, 400, 400); //Если не выставить
            //размер и положение то окно будет мелкое и незаметное
            setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); //это нужно для того чтобы при
            //закрытии окна закрывалась и программа,
            //иначе она останется висеть в процессах
            System.out.println("Создан класс окошек...");
        }

        public static void main(String[] args) { //эта функция может быть и в другом классе
            MyWindowApp Window1 = new MyWindowApp(); //Создаем экземпляр окна
            Window1.setTitle("First Windows");
            Window1.setLocationRelativeTo(null);
            Window1.setVisible(true); //С этого момента приложение запущено!

            MyWindowApp Window2  = new MyWindowApp(); //Создаем экземпляр окна
            Window2.setTitle("Second Windows");
            Window2.setLocation( 200, 300);
            Window2.setVisible(true); //С этого момента приложение запущено!


        }
    }

