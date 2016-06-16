<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
function prepareFactor(max){
   var primes= [];
   for(var i=2; i<=max; i++){
        var isPrime = true;
        for(var j=2; j*j<=i; j++){
             if(i%j ==0)
                 isPrime =false;
        }
       
        if(isPrime == true){
              primes.push(i);
        }
   }

   function factor(num){
       var list=[];
       for(var i=0; primes[i]*primes[i]<=num;){
            if(num % primes[i] ==0){
                list.push(primes[i]);
                num /= primes[i];
            }
            else{
               i++;
            }
       }
       list.push(num);
       return list;
   }

   return factor;
}

var factor = prepareFactor(1000);
alert(factor(100));

</script>

</body>
</html>
