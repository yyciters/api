import mongoose from 'mongoose'

const Schema = mongoose.Schema

// 品牌分类model
const Song = new mongoose.Schema({
    type: { type: String, default: 'song' }, // 类型：歌曲: song，直播音频: live_audio
    song_name: { type: String }, // 歌曲名
    sing_date: { type: Date, default: Date.now }, // 歌唱日期
    desc: { type: String }, // 对歌曲的描述，ex：惊艳的翻唱，演绎十二人的大唐红颜付
    img: {
        type: { type: String },
        name: { type: String },
        url: { type: String }, // 歌曲图片
        hash: { type: String },
        key: { type: String },
        uid: { type: String }
    },
    cover_singer: { type: String }, // 翻唱自
    lyric: { type: Schema.ObjectId }, // 歌词
    play_times: { type: Number, default: 0 },  // 播放次数
    love_times: { type: Number, default: 0 }, // 点赞次数
    tags: [{ type: Schema.Types.ObjectId, ref: 'tag' }],
    audio: {
        type: { type: String }, // 文件类型
        name: { type: String }, // 文件名
        url: { type: String }, // 上传七牛拿到的URL
        hash: { type: String }, // 返回的hash
        key: { type: String },
        uid: { type: String }
    }
})

export default mongoose.model('song', Song)
