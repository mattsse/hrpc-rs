// This file is auto generated by the protocol-buffers compiler

/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-redeclare */
/* eslint-disable camelcase */

// Remember to `npm install --save protocol-buffers-encodings`
var encodings = require('protocol-buffers-encodings')
var varint = encodings.varint
var skip = encodings.skip

var ShoutRequest = exports.ShoutRequest = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var ShoutResponse = exports.ShoutResponse = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var AddRequest = exports.AddRequest = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var SquareRequest = exports.SquareRequest = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var CalcResponse = exports.CalcResponse = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

defineShoutRequest()
defineShoutResponse()
defineAddRequest()
defineSquareRequest()
defineCalcResponse()

function defineShoutRequest () {
  var enc = [
    encodings.string
  ]

  ShoutRequest.encodingLength = encodingLength
  ShoutRequest.encode = encode
  ShoutRequest.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (!defined(obj.message)) throw new Error("message is required")
    var len = enc[0].encodingLength(obj.message)
    length += 1 + len
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (!defined(obj.message)) throw new Error("message is required")
    buf[offset++] = 10
    enc[0].encode(obj.message, buf, offset)
    offset += enc[0].encode.bytes
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      message: ""
    }
    var found0 = false
    while (true) {
      if (end <= offset) {
        if (!found0) throw new Error("Decoded message is not valid")
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.message = enc[0].decode(buf, offset)
        offset += enc[0].decode.bytes
        found0 = true
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defineShoutResponse () {
  var enc = [
    encodings.string,
    encodings.varint
  ]

  ShoutResponse.encodingLength = encodingLength
  ShoutResponse.encode = encode
  ShoutResponse.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (!defined(obj.message)) throw new Error("message is required")
    var len = enc[0].encodingLength(obj.message)
    length += 1 + len
    if (!defined(obj.loudness)) throw new Error("loudness is required")
    var len = enc[1].encodingLength(obj.loudness)
    length += 1 + len
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (!defined(obj.message)) throw new Error("message is required")
    buf[offset++] = 10
    enc[0].encode(obj.message, buf, offset)
    offset += enc[0].encode.bytes
    if (!defined(obj.loudness)) throw new Error("loudness is required")
    buf[offset++] = 16
    enc[1].encode(obj.loudness, buf, offset)
    offset += enc[1].encode.bytes
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      message: "",
      loudness: 0
    }
    var found0 = false
    var found1 = false
    while (true) {
      if (end <= offset) {
        if (!found0 || !found1) throw new Error("Decoded message is not valid")
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.message = enc[0].decode(buf, offset)
        offset += enc[0].decode.bytes
        found0 = true
        break
        case 2:
        obj.loudness = enc[1].decode(buf, offset)
        offset += enc[1].decode.bytes
        found1 = true
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defineAddRequest () {
  var enc = [
    encodings.float
  ]

  AddRequest.encodingLength = encodingLength
  AddRequest.encode = encode
  AddRequest.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (!defined(obj.a)) throw new Error("a is required")
    var len = enc[0].encodingLength(obj.a)
    length += 1 + len
    if (!defined(obj.b)) throw new Error("b is required")
    var len = enc[0].encodingLength(obj.b)
    length += 1 + len
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (!defined(obj.a)) throw new Error("a is required")
    buf[offset++] = 13
    enc[0].encode(obj.a, buf, offset)
    offset += enc[0].encode.bytes
    if (!defined(obj.b)) throw new Error("b is required")
    buf[offset++] = 21
    enc[0].encode(obj.b, buf, offset)
    offset += enc[0].encode.bytes
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      a: 0,
      b: 0
    }
    var found0 = false
    var found1 = false
    while (true) {
      if (end <= offset) {
        if (!found0 || !found1) throw new Error("Decoded message is not valid")
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.a = enc[0].decode(buf, offset)
        offset += enc[0].decode.bytes
        found0 = true
        break
        case 2:
        obj.b = enc[0].decode(buf, offset)
        offset += enc[0].decode.bytes
        found1 = true
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defineSquareRequest () {
  var enc = [
    encodings.float
  ]

  SquareRequest.encodingLength = encodingLength
  SquareRequest.encode = encode
  SquareRequest.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (!defined(obj.num)) throw new Error("num is required")
    var len = enc[0].encodingLength(obj.num)
    length += 1 + len
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (!defined(obj.num)) throw new Error("num is required")
    buf[offset++] = 13
    enc[0].encode(obj.num, buf, offset)
    offset += enc[0].encode.bytes
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      num: 0
    }
    var found0 = false
    while (true) {
      if (end <= offset) {
        if (!found0) throw new Error("Decoded message is not valid")
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.num = enc[0].decode(buf, offset)
        offset += enc[0].decode.bytes
        found0 = true
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defineCalcResponse () {
  var enc = [
    encodings.float
  ]

  CalcResponse.encodingLength = encodingLength
  CalcResponse.encode = encode
  CalcResponse.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (!defined(obj.result)) throw new Error("result is required")
    var len = enc[0].encodingLength(obj.result)
    length += 1 + len
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (!defined(obj.result)) throw new Error("result is required")
    buf[offset++] = 13
    enc[0].encode(obj.result, buf, offset)
    offset += enc[0].encode.bytes
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      result: 0
    }
    var found0 = false
    while (true) {
      if (end <= offset) {
        if (!found0) throw new Error("Decoded message is not valid")
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.result = enc[0].decode(buf, offset)
        offset += enc[0].decode.bytes
        found0 = true
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defined (val) {
  return val !== null && val !== undefined && (typeof val !== 'number' || !isNaN(val))
}