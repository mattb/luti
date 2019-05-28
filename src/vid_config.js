export const img_height = 1080
export const img_width = 1920

export const style = { height: img_height + "px", width: img_width + "px" }

export const overlap = 10

export const rows = 20 // square grid number of rows/columns
export const map_bounds = [[0, 0], [rows * img_height, rows * img_width]]
console.log("map_bounds", map_bounds)

// export const center = map_bounds.map(bnd => bnd.map(pt => pt / 2))[1]
export const center = [map_bounds[1][0] / 2, map_bounds[1][1] / 2]

export const base_url = "https://s3.amazonaws.com/lifeundertheice/"

export const init_zoom = 1
export const min_zoom = init_zoom - 1
export const max_zoom = init_zoom + 4

export const hls_config = {
  capLevelToPlayerSize: true,
  maxBufferSize: 30,
  maxBufferLength: 5
}

export const vid_config = {
  muted: true,
  autoplay: true,
  loop: true
}

export const all_locs = []
let x = img_width
let y = x * (img_height / img_width)
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < rows; j++) {
    all_locs.push([
      [i * y - overlap, j * x - overlap],
      [(i + 1) * y + overlap, (j + 1) * x + overlap]
    ])
  }
}

export const all_vid_names = [
  "112118_CanadaGlacierCryoconite1_NikonE200_10x_PinkRotifer.m3u8",
  "112118_CanadaGlacierCryoconite1_NikonE200_10x_Tardigrade_Beginning.m3u8",
  "112118_CanadaGlacierCryoconite1_NikonE200_10x_Tardigrade_End.m3u8",
  "112118_CanadaGlacierCryoconite1_NikonE200_40x_TwoSpirals_02.m3u8",

  "112118_CanadaGlacierCryoconite1_NikonE200_10x_PinkRotifer.m3u8",
  "112118_CanadaGlacierCryoconite1_NikonE200_10x_Tardigrade_Beginning.m3u8",
  "112118_CanadaGlacierCryoconite1_NikonE200_10x_Tardigrade_End.m3u8",
  "112118_CanadaGlacierCryoconite1_NikonE200_40x_TwoSpirals_02.m3u8",

  "112118_CanadaGlacierCryoconite1_NikonE200_10x_PinkRotifer.m3u8",
  "112118_CanadaGlacierCryoconite1_NikonE200_10x_Tardigrade_Beginning.m3u8",
  "112118_CanadaGlacierCryoconite1_NikonE200_10x_Tardigrade_End.m3u8",
  "112118_CanadaGlacierCryoconite1_NikonE200_40x_TwoSpirals_02.m3u8",

  "112118_CanadaGlacierCryoconite1_NikonE200_10x_PinkRotifer.m3u8",
  "112118_CanadaGlacierCryoconite1_NikonE200_10x_Tardigrade_Beginning.m3u8",
  "112118_CanadaGlacierCryoconite1_NikonE200_10x_Tardigrade_End.m3u8",
  "112118_CanadaGlacierCryoconite1_NikonE200_40x_TwoSpirals_02.m3u8",

  "112118_CanadaGlacierCryoconite1_NikonE200_10x_PinkRotifer.m3u8",
  "112118_CanadaGlacierCryoconite1_NikonE200_10x_Tardigrade_Beginning.m3u8",
  "112118_CanadaGlacierCryoconite1_NikonE200_10x_Tardigrade_End.m3u8",
  "112118_CanadaGlacierCryoconite1_NikonE200_40x_TwoSpirals_02.m3u8",

  "112118_CanadaGlacierCryoconite1_NikonE200_10x_PinkRotifer.m3u8",
  "112118_CanadaGlacierCryoconite1_NikonE200_10x_Tardigrade_Beginning.m3u8",
  "112118_CanadaGlacierCryoconite1_NikonE200_10x_Tardigrade_End.m3u8",
  "112118_CanadaGlacierCryoconite1_NikonE200_40x_TwoSpirals_02.m3u8",

  "112118_CanadaGlacierCryoconite1_NikonE200_10x_PinkRotifer.m3u8"
]
