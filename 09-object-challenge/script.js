const musicLibrary = [
    {
      title: "Song A",
      artist: "Artist X",
      status: {
        own: true,
        listening: false,
        listened: false
      }
    },
    {
      title: "Song B",
      artist: "Artist Y",
      status: {
        own: true,
        listening: false,
        listened: false
      }
    },
    {
      title: "Song C",
      artist: "Artist Z",
      status: {
        own: true,
        listening: false,
        listened: false
      }
    }
  ];
 
musicLibrary[0].status.listened = true;
musicLibrary[1].status.listened = true;
musicLibrary[2].status.listened = true;

const { title: firstSong } = musicLibrary[0];
console.log(firstSong);  // Output: "Song A"
  