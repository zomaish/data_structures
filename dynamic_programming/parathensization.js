
function countParenth(operands, operators, n) {
    let F[n][n], T[n][n];
 
    let i, L, j, count, k, totalIK, totalKJ;
    for (i=0; i<n; i++){
        F[i][i] = (operands[i] == 'F')? 1: 0;
        T[i][i] = (operands[i] == 'T')? 1: 0;
    }
 
    for (L=1; L<n; L++) {
      for (i=0, j=L; j<n; ++i, ++j){
            T[i][j] = F[i][j] = 0;
            for (count=0; count<L; count++){
                k = i + count;
                totalIK = T[i][k] + F[i][k];
                totalKJ = T[k+1][j] + F[k+1][j];

                if (operators[k] == '&') {
                    T[i][j] += T[i][k]*T[k+1][j];
                    F[i][j] += (totalIK *totalKJ - T[i][k]*T[k+1][j]);
                }
                if (operators[k] == '|'){
                    F[i][j] += F[i][k]*F[k+1][j];
                    T[i][j] += (totalIK*totalKJ - F[i][k]*F[k+1][j]);
                }
                if (operators[k] == '^'){
                    T[i][j] += F[i][k]*T[k+1][j] + T[i][k]*F[k+1][j];
                    F[i][j] += T[i][k]*T[k+1][j] + F[i][k]*F[k+1][j];
                }
            }
        }
    }
    return T[0][n-1];
}
 

const operands = "TTFT";
const operators = "|&^";
const n = operands.length;


console.log(countParenth(operands, operators, n)));

 
