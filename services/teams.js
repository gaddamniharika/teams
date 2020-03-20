function finding_teams(result , teams)
{
    var count = result.length;
    var a = [0,0,0,0,0];
    var id_a = new Array(count);
    var t_a =  new Array(teams);
    var t = 0,total_sum =0;
    var team_mem = count/teams;
    var res = new Array(teams);

    if(team_mem * teams == count)
    {
    for(var i = 0 ; i < count ; i++)
    {
        a[(result[i].rating-1)]+=1;
        total_sum += result[i].rating;
        var t = result[i].id;
        id_a[t-1] = result[i].rating;
    }
    for(var i=0; i < teams ;i++)
    {
        t_a[i] = new Array(5);
        t_a[i].fill(0);
        t = 0;
        sum = total_sum / teams;
        for(var j =0; t < team_mem; j=(j+1)%(5))
        {
            if(sum > 0)
            {
                if(((j+1 == sum)&&(a[j]>0))||((j < sum)&&(a[j] > 0)))
                {
                    sum -= j+1;
                    t_a[i][j] = t_a[i][j]+1;
                    a[j]--;
                    t++;
                }
            }
        }
        if(sum > 0)
        for(var j=1;j<5;j++)
        {
            if((a[sum+j]>0)&&(t_a[i][j]>0))
            {
                t_a[i][j]--;
                t_a[i][sum+j]++;
                a[sum+j]--;
                a[j]++;
                break;
            }
        }
    }

    for(i=0;i<teams;i++)
    {
        res[i] = [];
        for(j=0;j<5;j++)
        {
            while (t_a[i][j] > 0)
            {
                var z = id_a.indexOf(j+1);
                id_a[z]=-1;
                t_a[i][j]--;
                res[i].push(z+1);
                
            }
        }
    } 
    return res;
    }
    return "cant form teams with equal members";
}
module.exports = finding_teams;