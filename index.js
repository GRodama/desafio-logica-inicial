var iXpDoHeroi= 15000;
var sNomeHeroi = "Jonas";
var sClasseDoHeroi = "";

if (iXpDoHeroi < 1000)
{
 sClasseDoHeroi = "Ferro"
}
else if (iXpDoHeroi >= 1001 && iXpDoHeroi <2000)
{
 sClasseDoHeroi = "Bronze"
}
else if (iXpDoHeroi >= 2001 && iXpDoHeroi < 5000)
{
 sClasseDoHeroi = "Prata"
}
else if (iXpDoHeroi >= 6001 && iXpDoHeroi < 7000)
{
 sClasseDoHeroi = "Ouro"
}
else if (iXpDoHeroi >= 7.001  && iXpDoHeroi < 8.000 )
{
    sClasseDoHeroi = "Platina"
}
else if (iXpDoHeroi >= 8001  && iXpDoHeroi < 9000)
{
    sClasseDoHeroi = " Ascendente"
}
else if (iXpDoHeroi >= 9001  && iXpDoHeroi < 10000)
{
    sClasseDoHeroi = " Imortal"
}
else if (iXpDoHeroi >= 10001)
{
    sClasseDoHeroi = " Radiante"
}





console.log ("O Herói de nome " + sNomeHeroi + " está no nível de " + sClasseDoHeroi)