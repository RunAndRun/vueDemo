// type:5--不可修改; type:0--推荐频道; type:1--地方新闻;

var state = {
	channels:{"default":[
		  {type:5,path:"focusNews",page:"要闻"},
			{type:0,path:"vedio",page:"视频"},
			{type:1,path:"heBei",page:"河北"},
			{type:0,path:"military",page:"军事"},
			{type:0,path:"internation",page:"国际"},
			{type:0,path:"economy",page:"财经"},
			{type:0,path:"cars",page:"汽车"},
			{type:0,path:"society",page:"社会"},
			{type:0,path:"fashion",page:"时尚"},
			{type:0,path:"sports",page:"体育"},
			{type:0,path:"NBA",page:"NBA"},
			{type:0,path:"film",page:"电影"}
		],
		"recommendations":[
		  {type:0,path:"aaa",page:"旅游"},
		  {type:0,path:"aaa",page:"科技"},
		  {type:0,path:"aaa",page:"纪录片"},
		  {type:0,path:"aaa",page:"文化"},
		  {type:0,path:"aaa",page:"音乐"},
		  {type:0,path:"aaa",page:"动漫"},
		  {type:0,path:"aaa",page:"历史"},
		  {type:0,path:"aaa",page:"读书"},
		  {type:0,path:"aaa",page:"电竞"},
		  {type:0,path:"aaa",page:"摄影"}
		],
		"placeNews":[
		  {type:1,path:"bbb",page:"上海"},
		  {type:1,path:"bbb",page:"广州"},
		  {type:1,path:"bbb",page:"成都"},
		  {type:1,path:"bbb",page:"武汉"},
		  {type:1,path:"bbb",page:"杭州"},
		  {type:1,path:"bbb",page:"重庆"},
		  {type:1,path:"bbb",page:"厦门"}
		]
  },
  channelsPage:false,
  loginPage:false
}

export default state;