const useGenres=(selectedGenres)=>{

    if (selectedGenres.length <1){
        return "";
    }
      const selectedGenresId=selectedGenres.map((sg)=>sg.id);
   return     selectedGenresId.reduce((acc,curr)=> acc + ',' + curr    );
//    return     selectedGenresId.join(',');
};
export default useGenres;