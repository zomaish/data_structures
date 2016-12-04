function numberOfSolutions(total, arr){

    let temp = new Array(total+1);

    temp[0] = 1;
    for(let i=0; i < arr.length; i++){
        for(let j=1; j <= total ; j++){
            if(j >= arr[i]){
              temp[j] = temp[j] >> 0
              temp[j] += temp[j-arr[i]] >> 0;
            }
        }
    }
    return temp[total];
    }                                                                     
console.log(numberOfSolutions(10, [1, 2, 5, 3, 6]))


public int numberOfSolutions(int total, int coins[]){
        int temp[][] = new int[coins.length+1][total+1];
        for(int i=0; i <= coins.length; i++){
            temp[i][0] = 1;
        }
        for(int i=1; i <= coins.length; i++){
            for(int j=1; j <= total ; j++){
                if(coins[i-1] > j){
                    temp[i][j] = temp[i-1][j];
                }
                else{
                    temp[i][j] = temp[i][j-coins[i-1]] + temp[i-1][j];
                }
            }
        }
        return temp[coins.length][total];
    }