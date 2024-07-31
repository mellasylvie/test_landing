
// dataset team_resources
//features data
const x_train = [[10,  8,  6, 10, 10,  7,  7,  8,  2,  4,  8,  2],
                [ 1,  2,  2,  2,  2,  2,  4,  5,  6,  6,  3,  2],
                [ 6,  3,  1,  7,  2,  1,  5,  8, 10,  8,  3,  6],
                [ 6,  9,  9,  7,  3,  3,  3,  7,  2,  5,  6,  2],
                [ 8,  8,  6,  7,  4,  4,  5,  7,  5,  4,  8, 10],
                [ 3,  4,  3,  4,  3,  0,  4,  0,  4,  2,  2,  5],
                [ 7,  3,  3,  1,  2,  6,  3,  9,  8,  9,  6,  7],
                [ 4,  6,  3,  5,  5,  5,  4,  5,  5,  5,  3,  3],
                [ 6,  6,  1,  1,  1,  1,  4,  1,  4,  1,  1, 10],
                [ 4,  8,  8,  8,  5,  4,  3,  3,  3,  2,  4,  5],
                [ 7,  8,  8,  8,  8,  2,  5,  5,  5,  5,  2,  2],
                [ 5,  5,  5,  5,  5,  5,  9,  9,  9, 10,  6,  5],
                [ 0,  0,  0,  3,  0,  0,  0, 10, 10, 10,  4,  6],
                [ 8,  9,  8,  7,  7, 10,  8,  9,  1,  4,  6,  9]]

       
        //mencari jarak euclidean
        function euclidianDistance(a,b){
            var distance = 0
            var n
            for (n = 0; n < a.length; n++) {
                if(a[n]!=0){
                    distance += Math.pow(a[n] - (b[n]/10), 2);
                }
            }
            return Math.sqrt(distance);
        }

        // mendapatkan jarak dari point baru ke setiap data
        function getNeigh(train, test){
            const distance = []
            var n
            for(n=0; n<train.length; n++){
                const dist = euclidianDistance(test, train[n]);
                distance.push(dist);
            }
            return distance;
        }

            var img1 = document.getElementById("foto1")
            var img2 = document.getElementById("foto2") 
            var img3 = document.getElementById("foto3")
            var img4 = document.getElementById("foto4")
            var img5 = document.getElementById("foto5")
            var img6 = document.getElementById("foto6")
            var img7 = document.getElementById("foto7")
            var img8 = document.getElementById("foto8")
            var img9 = document.getElementById("foto9")
            var img10 = document.getElementById("foto10")
            var img11 = document.getElementById("foto11")
            var img12 = document.getElementById("foto12")
            var img13 = document.getElementById("foto13")
            var img14 = document.getElementById("foto14")
        
    
        //menjalankan inputan
        async function processData(){
            var slider1 = document.getElementById("cv").value /100;
            var slider2 = document.getElementById("regresi").value /100;
            var slider3 = document.getElementById("timeseries").value /100;
            var slider4 = document.getElementById("eda").value /100;
            var slider5 = document.getElementById("nlp").value /100;
            var slider6 = document.getElementById("speech").value /100;
            var slider7 = document.getElementById("data").value /100;
            var slider8 = document.getElementById("deploy").value /100;
            var slider9 = document.getElementById("fe").value /100;
            var slider10 = document.getElementById("be").value /100;
            var slider11 = document.getElementById("mlops").value /100;
            var slider12 = document.getElementById("writer").value /100;


            test = [slider1, slider2, slider3, slider4, slider5, slider6, slider7, slider8, slider9, slider10, slider11, slider12]
                
            y_new = getNeigh(x_train, test)
            var y_min = Math.min.apply(null, y_new)
            var y_max = Math.max.apply(null, y_new)
            var delta = y_max-y_min
            for(n=0; n<y_new.length; n++){
                y_new[n] = 1 - ((y_new[n] - y_min)/delta)
                if(y_new[n]==0){
                   y_new[n]=0.05
                 }
             }

            img1.style.opacity = y_new[0];
            img2.style.opacity = y_new[1];
            img3.style.opacity = y_new[2];
            img4.style.opacity = y_new[3];
            img5.style.opacity = y_new[4];
            img6.style.opacity = y_new[5];
            img7.style.opacity = y_new[6];
            img8.style.opacity = y_new[7];
            img9.style.opacity = y_new[8];
            img10.style.opacity = y_new[9];
            img11.style.opacity = y_new[10];
            img12.style.opacity = y_new[11];
            img13.style.opacity = y_new[12];
            img14.style.opacity = y_new[13];
        } processData()

        function reset(){
            document.getElementById("cv").value = 0;
            document.getElementById("regresi").value = 0;
            document.getElementById("timeseries").value = 0;
            document.getElementById("eda").value = 0;
            document.getElementById("nlp").value = 0;
            document.getElementById("speech").value = 0;
            document.getElementById("data").value = 0;
            document.getElementById("deploy").value = 0;
            document.getElementById("fe").value = 0;
            document.getElementById("be").value = 0;
            document.getElementById("mlops").value = 0;
            document.getElementById("writer").value = 0;
           
            var output1 = document.getElementById("value1");
                output1.innerHTML = 0;
            var output2 = document.getElementById("value2");
                output2.innerHTML = 0;
            var output3 = document.getElementById("value3");
                output3.innerHTML = 0;
            var output4 = document.getElementById("value4");
                output4.innerHTML = 0;
            var output5 = document.getElementById("value5");
                output5.innerHTML = 0;
            var output6 = document.getElementById("value6");
                output6.innerHTML = 0;
            var output7 = document.getElementById("value7");
                output7.innerHTML = 0;
            var output8 = document.getElementById("value8");
                output8.innerHTML = 0;
            var output9 = document.getElementById("value9");
                output9.innerHTML = 0;
            var output10 = document.getElementById("value10");
                output10.innerHTML = 0;
            var output11 = document.getElementById("value11");
                output11.innerHTML = 0;
            var output12 = document.getElementById("value12");
                output12.innerHTML = 0;

            img1.style.opacity = 0.5;
            img2.style.opacity = 0.5;
            img3.style.opacity = 0.5;
            img4.style.opacity = 0.5;
            img5.style.opacity = 0.5;
            img6.style.opacity = 0.5;
            img7.style.opacity = 0.5;
            img8.style.opacity = 0.5;
            img9.style.opacity = 0.5;
            img10.style.opacity = 0.5;
            img11.style.opacity = 0.5;
            img12.style.opacity = 0.5;
            img13.style.opacity = 0.5;
            img14.style.opacity = 0.5;
            
         }reset()
