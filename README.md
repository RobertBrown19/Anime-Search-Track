This app will 
- Allow you search an anime database
- Get more info on a selected anime
- Add a selected anime to a tracking database
- View a list of tracked anime
- Add your current watched eppisode to a tracked anime

one of the first issues I came across while making this app was to do with react useState and trying to get data updated from another module that runs a fetch request on call. when the data is rendered it reruns the fetch request and then rerenders the data which will rerun the fetch request leaving you in a fetch loop.
To fix the fetch loop issue I had to call it using useEffect with an empty array so that it only runs the fetch request on the first render.