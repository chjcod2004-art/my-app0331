import { useState } from "react";

function VideoCard({title,channel,views}){ //props title,channel,views
    const [likes,setLikes] = useState(0); // likes,setLikes 좋아요 누르기 state
    const [clicks,setClicks]=useState(0); //화면 클릭하는 state
    const handleCardClick=()=>{ //클릭수 +1
        setClicks(clicks+1);
    };
    const handleLikeClick = (event)=> { //좋아요 누르면 +1
        event.stopPropagation(); //카드 클리만해도 좋아요가 +1 될수있어서 
        setLikes(likes+1);
    };
  return(
    <div onClick={handleCardClick} //onClick으로 화면 터치하면 +1 div 영역에 추가
    style={{  //스타일 지정
        border:"1px solid #ccc",
        borderRadius:"12px",
        padding:"16px",
        marginBottom:"12px",
        cursor:"pointer"
    }}>
    
    
      <h3>{title}</h3>
      <p>채널:{channel}</p>
      <p>조회수:{views}</p>
      <p>클릭수:{clicks}</p>
      <p>좋아요 수: {likes}</p>
      <button onClick={handleLikeClick}>좋아요</button> 
    </div>//좋아요 버튼 누르면 좋아요 올라가기
  )
};



function VideoList({videos}){
  return (
    <div>
      {videos.map((video,index) =>( //map으로 입력 받은 props를 출력
        <VideoCard
              key={index}
              title={video.title}
              channel={video.channel}
              views={video.views}/>
      ))}
    </div>
  )
}

function App(){
    const [filter,setFilter]=useState("전체"); //필터 useState쓰기
   

  const videos=[
     {
      title:"리액트 기초 강의",
      channel:"코딩채널",
      views:"10만",
      category:"공부"
     },
     {
      title:"자바스크립트 완벽 정리",
      channel:"개발자TV",
      views:"25만",
      category:"자바스크립트"
     },
     {
      title:"프론트엔드 취업",
      channel:"취업",
      views:"30만",
      category:"취업"
     }
  ];
   const filteredVideos = 
        filter==="전체" ? videos : videos.filter((video)=> video.category === filter);
    return (
   <div style={{marginBottom:"20px"}}>
    <button onClick={()=> setFilter("전체")}>전체</button>
    <button onClick={()=> setFilter("공부")}>공부</button>
    <button onClick={()=> setFilter("자바스크립트")}>자바스크립트</button>
    <button onClick={()=> setFilter("취업")}>취업</button>
    <p>현재 필터:{filter}</p>
    <VideoList videos={filteredVideos}/> 
   </div>
    )

  
}

export default App;