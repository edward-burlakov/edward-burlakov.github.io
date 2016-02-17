/**
 * Created by Edward on 14.02.2016. Счетчик  последнего изменения поля результата.
 */
function get_timer_321($string_321) {
        // В функцию передано значение даты и времени последнего изменения строки ввода

        // Получить текущее значение даты и времени
        var $date_current = new Date();

        // Получить полное  время таймера от даты изменения строки ввода
        var $timer_321 = $date_current - $string_321;

        // Если время отсчета пошло
        if($string_321 < $date_current) {
            var day_321 = parseInt($timer_321/(60*60*1000*24));
            if(day_321 < 10) {
                day_321 = "0" + day_321;
            }
            day_321 = day_321.toString();
            var hour_321 = parseInt($timer_321/(60*60*1000))%24;
            if(hour_321 < 10) {
                hour_321 = "0" + hour_321;
            }
            hour_321 = hour_321.toString();
            var min_321 = parseInt($timer_321/(1000*60))%60;
            if(min_321 < 10) {
                min_321 = "0" + min_321;
            }
            min_321 = min_321.toString();
            var sec_321 = parseInt($timer_321/1000)%60;
            if(sec_321 < 10) {
                sec_321 = "0" + sec_321;
            }
            sec_321 = sec_321.toString();

            $(".timerhello_321 p.result .result-day").text(day_321);
            $(".timerhello_321 p.result .result-hour").text(hour_321);
            $(".timerhello_321 p.result .result-minute").text(min_321);
            $(".timerhello_321 p.result .result-second").text(sec_321);

        }
        // Если строка резульата была только что изменена .
        else {
            $(".timerhello_321 p.result .result-day").text("00");
            $(".timerhello_321 p.result .result-hour").text("00");
            $(".timerhello_321 p.result .result-minute").text("00");
            $(".timerhello_321 p.result .result-second").text("00");
        }
    }

// Cчетчик последнего нажатия клавиши в строке ввода.
function getfrominputs_321()
{
        // Зафиксировать и передать в функцию  таймера время нажатия клавиши  в строке ввода
        var $string_321 = new Date();

        //Запустить функцию расчета и отображения таймера
        get_timer_321($string_321);


    // Очистить указатель на счетчик
    clearInterval($timer2);

    // Создать счетчик, указав период вызова функции расчета  и вывода изображения индикаторов времени
    $timer2=setInterval(function(){get_timer_321($string_321);},1000);
}
