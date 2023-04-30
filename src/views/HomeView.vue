<template>
  <div class="home">
1
    <div class="selectNav row row-cols-1 g-3">
      <div class="col-md-2">
        <select v-model="selectCountry" class="form-select form-select-lg " aria-label=".form-select-lg example">
          <option value="" selected disabled>請選擇國家</option>
          <option :value="item[0]" v-for="(item) in country" :key="item[0]">{{ item[1] }}</option>
        </select>
      </div>
      <div class="col-md-4">
        <select v-model="selectCategory" class="form-select form-select-lg " aria-label=".form-select-lg example">
          <option value="" selected disabled>請選擇類別</option>
          <option :value="item.id" v-for="item in videoCategory" :key="item.id">{{ item.type }}</option>
        </select>
      </div>
      <div class="col-md-1">
        <button type="button" class="btn btn-primary" @click="getVideoRanking">搜尋</button>
      </div>
    </div>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="row row-cols-1 row-cols-md-3 g-4 p-4" v-if="videoRankingList.length > 0">
      <div class="col" v-for="(item, i) in videoRankingList" :key="i">
        <div class="card h-100">
          <img @click="playMusic(item)" :src="item.snippet.thumbnails.standard.url" class="card-img-top" alt="..."
            data-bs-toggle="modal" data-bs-target="#exampleModal">
          <div class="card-body">
            <h5 class="card-title">{{ item.snippet.title }}</h5>
            <p class="card-text">
              觀看次數：{{ item.statistics.viewCount }}次 ，時間：{{ new Date(item.snippet.publishedAt) }}
            </p>
          </div>
        </div>
      </div>
      <!-- <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div> -->
    </div>
    <div v-else>請搜尋</div>
  </div>
  <!-- <div class="musicPlayBox" id="player">

</div> -->
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-body" id="mainVideo">
          <div class="musicPlayBox" id="player">
          </div>
          <!-- ... -->
        </div>

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { ref, onMounted } from 'vue'
import { apiVideoRanking } from '@/api'

export default {
  name: 'HomeView',
  // components: {
  //   HelloWorld
  // },
  setup () {
    const num = ref(2)

    // 搜尋
    const videoRankingList = ref([])
    const getVideoRanking = () => {
      if (selectCategory.value === '' || selectCountry.value === '') {
        return
      }
      apiVideoRanking(selectCountry.value, selectCategory.value).then((res) => {
        console.log(res)
        videoRankingList.value = res.data.items
        console.log(videoRankingList)
      })
    }
    // 搜尋-選項
    const country = [
      ['AL', 'Albania'],
      ['DZ', 'Algeria'],
      ['AR', 'Argentina'],
      ['AM', 'Armenia'],
      ['AU', 'Australia'],
      ['AT', 'Austria'],
      ['AZ', 'Azerbaijan'],
      ['BH', 'Bahrain'],
      ['BD', 'Bangladesh'],
      ['BY', 'Belarus'],
      ['BE', 'Belgium'],
      ['BO', 'Bolivia'],
      ['BN', 'Brunei'],
      ['BG', 'Bulgaria'],
      ['BF', 'Burkina-faso'],
      ['MM', 'Burma'],
      ['CA', 'Canada'],
      ['CL', 'Chile'],
      ['CY', 'Cyprus'],
      ['CZ', 'Czech Republic'],
      ['DK', 'Denmark'],
      ['DO', 'Dominica Rep.'],
      ['EC', 'Ecuador'],
      ['EG', 'Egypt'],
      ['SV', 'EI Salvador'],
      ['EE', 'Estonia'],
      ['FI', 'Finland'],
      ['FR', 'France'],
      ['GE', 'Georgia'],
      ['DE', 'Germany'],
      ['GH', 'Ghana'],
      ['GR', 'Greece'],
      ['GD', 'Grenada'],
      ['GU', 'Guam'],
      ['GT', 'Guatemala'],
      ['GN', 'Guinea'],
      ['GY', 'Guyana'],
      ['HT', 'Haiti'],
      ['HN', 'Honduras'],
      ['HU', 'Hungary'],
      ['IS', 'Iceland'],
      ['IN', 'India'],
      ['ID', 'Indonesia'],
      ['IR', 'Iran'],
      ['IQ', 'Iraq'],
      ['IE', 'Ireland'],
      ['IL', 'Israel'],
      ['IT', 'Italy'],
      ['JM', 'Jamaica'],
      ['JP', 'Japan'],
      ['JO', 'Jordan'],
      ['KH', 'Kampuchea (Cambodia )'],
      ['KZ', 'Kazakstan'],
      ['KE', 'Kenya'],
      ['KR', 'Korea'],
      ['KW', 'Kuwait'],
      ['KG', 'Kyrgyzstan'],
      ['LA', 'Laos'],
      ['LV', 'Latvia'],
      ['LB', 'Lebanon'],
      ['LS', 'Lesotho'],
      ['LR', 'Liberia'],
      ['LY', 'Libya'],
      ['LI', 'Liechtenstein'],
      ['LT', 'Lithuania'],
      ['LU', 'Luxembourg'],
      ['MO', 'Macao'],
      ['MG', 'Madagascar'],
      ['MW', 'Malawi'],
      ['MY', 'Malaysia'],
      ['MV', 'Maldives'],
      ['ML', 'Mali'],
      ['MT', 'Malta'],
      ['MU', 'Mauritius'],
      ['MX', 'Mexico'],
      ['MD', 'Moldova'],
      ['MC', 'Monaco'],
      ['MN', 'Mongolia'],
      ['MS', 'Montserrat Is.'],
      ['MA', 'Morocco'],
      ['MZ', 'Mozambique'],
      ['NA', 'Namibia'],
      ['NR', 'Nauru'],
      ['NP', 'Nepal'],
      ['NL', 'Netherlands'],
      ['NZ', 'New Zealand'],
      ['NI', 'Nicaragua'],
      ['NE', 'Niger'],
      ['NG', 'Nigeria'],
      ['KP', 'North Korea'],
      ['NO', 'Norway'],
      ['OM', 'Oman'],
      ['PK', 'Pakistan'],
      ['PA', 'Panama'],
      ['PG', 'Papua New Cuinea'],
      ['PY', 'Paraguay'],
      ['PE', 'Peru'],
      ['PH', 'Philippines'],
      ['PL', 'Poland'],
      ['PF', 'French Polynesia'],
      ['PT', 'Portugal'],
      ['PR', 'Puerto Rico'],
      ['QA', 'Qatar'],
      ['RO', 'Romania'],
      ['RU', 'Russia'],
      ['LC', 'Saint Lueia'],
      ['VC', 'Saint Vincent'],
      ['SM', 'San Marino'],
      ['ST', 'Sao Tome and Principe'],
      ['SA', 'Saudi Arabia'],
      ['SN', 'Senegal'],
      ['SC', 'Seychelles'],
      ['SL', 'Sierra Leone'],
      ['SG', 'Singapore'],
      ['SK', 'Slovakia'],
      ['SI', 'Slovenia'],
      ['SB', 'Solomon Is.'],
      ['SO', 'Somali'],
      ['ZA', 'South Africa'],
      ['ES', 'Spain'],
      ['LK', 'Sri Lanka'],
      ['SD', 'Sudan'],
      ['SR', 'Suriname'],
      ['SZ', 'Swaziland'],
      ['SE', 'Sweden'],
      ['CH', 'Switzerland'],
      ['SY', 'Syria'],
      ['TW', 'Taiwan'],
      ['TJ', 'Tajikstan'],
      ['TZ', 'Tanzania'],
      ['TH', 'Thailand'],
      ['TG', 'Togo'],
      ['TO', 'Tonga'],
      ['TT', 'Trinidad and Tobago'],
      ['TN', 'Tunisia'],
      ['TR', 'Turkey'],
      ['TM', 'Turkmenistan'],
      ['UG', 'Uganda'],
      ['UA', 'Ukraine'],
      ['AE', 'United Arab Emirates'],
      ['GB', 'United Kiongdom'],
      ['US', 'United States of America'],
      ['UY', 'Uruguay'],
      ['UZ', 'Uzbekistan'],
      ['VE', 'Venezuela'],
      ['VN', 'Vietnam'],
      ['YE', 'Yemen'],
      ['YU', 'Yugoslavia'],
      ['ZW', 'Zimbabwe'],
      ['ZR', 'Zaire'],
      ['ZM', 'Zambia']
    ]
    const videoCategory = [
      {
        id: 1,
        type: 'Film & Animation'
      },
      {
        id: 2,
        type: 'Cars & Vehicles'
      },
      {
        id: 10,
        type: 'Music'
      },
      {
        id: 15,
        type: 'Pets & Animals'
      },
      {
        id: 17,
        type: 'Sport'
      },
      {
        id: 19,
        type: 'Travel & Events'
      },
      {
        id: 20,
        type: 'Gaming'
      },
      {
        id: 22,
        type: 'People & Blogs'
      },
      {
        id: 23,
        type: 'Comedy'
      },
      {
        id: 24,
        type: 'Entertainment'
      },
      {
        id: 25,
        type: 'News & Politics'
      },
      {
        id: 26,
        type: 'How-to & Style'
      },
      {
        id: 27,
        type: 'Education'
      },
      {
        id: 28,
        type: 'Science & Technology'
      },
      {
        id: 29,
        type: 'Non-profits & Activism'
      }
    ]
    const selectCategory = ref('')
    const selectCountry = ref('')

    getVideoRanking()
    // onMounted(() => {
    //   getVideoRanking()
    // })

    // 播放
    let player
    const playMusic = (item) => {
      console.log('111111')
      console.log(item)
      console.log(item.id)

      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
      function onYouTubeIframeAPIReady () {
        // eslint-disable-next-line no-undef
        player = new YT.Player('player', {
          height: '390', // 高度預設值為390，css會調成responsive
          width: '640', // 寬度預設值為640，css會調成responsive
          videoId: item.id,
          playerVars: {
            controls: 1
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
          }
        })
        // debugger
        if (
          document.getElementById('player').getAttribute('src') !== undefined
        ) {
          player.getIframe().src =
            'https://www.youtube.com/embed/' +
            item.id +
            '?enablejsapi=1&controls=1'
        }
      }

      function onPlayerReady (event) {
        event.target.playVideo()
      }
      function onPlayerStateChange (event) {
        changeBorderColor(event.data)
        // if (event.data == YT.PlayerState.PLAYING && !done) {
        // if (player.getPlayerState() == 0) {
        // }
        // setTimeout(stopVideo, 6000);
        // done = true;
        // }
      }
      // function stopVideo() {
      //   console.log(player.getPlayerState());
      // }
      setTimeout(onYouTubeIframeAPIReady, 1000)
      function changeBorderColor (playerStatus) {
        // let t = this;
        // let color
        if (playerStatus === -1) {
          // unstarted = gray
        } else if (playerStatus === 0) {
          // ended = yellow
          // const nextPlay = item.id + 1
          // if (nextPlay < t.countOfPage) {
          //   t.playMusic(nextPlay);
          // } else if (t.currPage <= t.totalPage - 1) {
          //   console.log(t.currPage);
          //   console.log(t.totalPage);
          //   t.setPage(t.currPage + 1);
          //   t.playMusic(0);
          // }
        } else if (playerStatus === 1) {
          // playing = green
        } else if (playerStatus === 2) {
          // paused = red
        } else if (playerStatus === 3) {
          // buffering = purple
        } else if (playerStatus === 5) {
          // video cued = orange
        }
      }
    }
    function stopVideo () {
      player.stopVideo()
      const SecondPara = document.getElementById('player')
      SecondPara.remove()

      const ThirdParagraph = document.createElement('div')
      ThirdParagraph.id = 'player'
      ThirdParagraph.className = 'musicPlayBox'
      const newElement = document.getElementById('mainVideo')
      newElement.appendChild(ThirdParagraph)
    }

    onMounted(() => {
      const myModalEl = document.getElementById('exampleModal')
      console.log(myModalEl)
      myModalEl.addEventListener('hidden.bs.modal', event => {
        // do something...
        stopVideo()
      })
    })
    return {
      num,
      videoRankingList,
      country,
      videoCategory,
      selectCategory,
      selectCountry,
      getVideoRanking,
      playMusic,
      stopVideo
    }
  }
}
</script>

<style>
.selectNav {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.card-img-top {
  cursor: pointer;
}

.musicPlayBox {
  width: 100%;
  /* height: 100%; */
  /* background-color: #000; */
}
</style>
