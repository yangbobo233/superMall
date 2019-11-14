import Mock from 'mockjs'

Mock.mock('/api/img', (req, res) => {
  return Mock.mock({
    "user|10-50":[{
      'img':"@img(100x100,'#4A7BF7')",
    }],
  })
})
