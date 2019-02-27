import './styles.css';

function calculate( tipPct:number) {

    var inNumberInput: HTMLInputElement = <HTMLInputElement>document.getElementById("billAmount");

  

    if (inNumberInput.value ==="") {
        (<HTMLInputElement> document.getElementById("ten")).disabled = true;
        (<HTMLInputElement> document.getElementById("fifteen")).disabled = true;
        (<HTMLInputElement> document.getElementById("twenty")).disabled = true;
        return;
        } else {
            (<HTMLInputElement> document.getElementById("ten")).disabled = false;
            (<HTMLInputElement> document.getElementById("fifteen")).disabled = false;
            (<HTMLInputElement> document.getElementById("twenty")).disabled = false;
        }

        var numberinputString = inNumberInput.value;
        var cost = parseFloat(numberinputString);
        if (cost < 0) {
            document.getElementById("billAmount").style.border="2px solid red";
            return;
        } else {
            document.getElementById("billAmount").style.border="1px solid black";
        }
        var tip = cost * tipPct;
        var total = cost + tip;
      
        document.getElementById("tipPercent").innerHTML = (tipPct*100) +"%";
        document.getElementById("billAmountDisplay").innerHTML= "$"+Number(cost).toFixed(2);
        document.getElementById("tipPercentage").innerHTML = (tipPct*100) +"%";
        document.getElementById('tipAmount').innerHTML = "$"+Number(tip).toFixed(2);
        document.getElementById("billTotal").innerHTML = "$"+Number(total).toFixed(2);
    
    }
    document.getElementById("ten").addEventListener("click", function() {
        calculate(0.10);
    });
    
     document.getElementById("fifteen").addEventListener("click", function() {
             calculate(0.15);
        });
    
        document.getElementById("twenty").addEventListener("click", function() {
            calculate(0.20);
      });
