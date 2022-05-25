import { abort } from 'env';
import { log } from 'callbacks';

  var bufferView;
  var base64ReverseLookup = new Uint8Array(123/*'z'+1*/);
  for (var i = 25; i >= 0; --i) {
    base64ReverseLookup[48+i] = 52+i; // '0-9'
    base64ReverseLookup[65+i] = i; // 'A-Z'
    base64ReverseLookup[97+i] = 26+i; // 'a-z'
  }
  base64ReverseLookup[43] = 62; // '+'
  base64ReverseLookup[47] = 63; // '/'
  /** @noinline Inlining this function would mean expanding the base64 string 4x times in the source code, which Closure seems to be happy to do. */
  function base64DecodeToExistingUint8Array(uint8Array, offset, b64) {
    var b1, b2, i = 0, j = offset, bLength = b64.length, end = offset + (bLength*3>>2) - (b64[bLength-2] == '=') - (b64[bLength-1] == '=');
    for (; i < bLength; i += 4) {
      b1 = base64ReverseLookup[b64.charCodeAt(i+1)];
      b2 = base64ReverseLookup[b64.charCodeAt(i+2)];
      uint8Array[j++] = base64ReverseLookup[b64.charCodeAt(i)] << 2 | b1 >> 4;
      if (j < end) uint8Array[j++] = b1 << 4 | b2 >> 2;
      if (j < end) uint8Array[j++] = b2 << 6 | base64ReverseLookup[b64.charCodeAt(i+3)];
    }
    return uint8Array;
  }
function initActiveSegments(imports) {
  base64DecodeToExistingUint8Array(bufferView, 12, "LAAAAAAAAAAAAAAAAQAAAA4AAAAgAHIAZQB0AHUAcgBuAAAAAAAAAAAAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 60, "HAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 92, "PAAAAAAAAAAAAAAAAQAAACgAAABBAGwAbABvAGMAYQB0AGkAbwBuACAAdABvAG8AIABsAGEAcgBnAGUAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 156, "PAAAAAAAAAAAAAAAAQAAACAAAAB+AGwAaQBiAC8AcgB0AC8AaQB0AGMAbQBzAC4AdABzAAAAAAAAAAAAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 224, "AAAAAAAAAAAAAAAAAAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 256, "AAAAAAAAAAAAAAAAAAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 284, "PAAAAAAAAAAAAAAAAQAAACQAAABJAG4AZABlAHgAIABvAHUAdAAgAG8AZgAgAHIAYQBuAGcAZQAAAAAAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 348, "LAAAAAAAAAAAAAAAAQAAABQAAAB+AGwAaQBiAC8AcgB0AC4AdABzAAAAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 400, "AAAAAAAAAAAAAAAAAAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 428, "PAAAAAAAAAAAAAAAAQAAAB4AAAB+AGwAaQBiAC8AcgB0AC8AdABsAHMAZgAuAHQAcwAAAAAAAAAAAAAAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 492, "LAAAAAAAAAAAAAAAAQAAABoAAAB+AGwAaQBiAC8AYQByAHIAYQB5AC4AdABzAAAA");
  base64DecodeToExistingUint8Array(bufferView, 540, "LAAAAAAAAAAAAAAAAQAAABAAAABjAGEAbABsAGIAYQBjAGsAAAAAAAAAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 588, "PAAAAAAAAAAAAAAAAQAAACoAAABPAGIAagBlAGMAdAAgAGEAbAByAGUAYQBkAHkAIABwAGkAbgBuAGUAZAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 652, "PAAAAAAAAAAAAAAAAQAAACgAAABPAGIAagBlAGMAdAAgAGkAcwAgAG4AbwB0ACAAcABpAG4AbgBlAGQAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 720, "BAAAACAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAIJAAAAAAAA");
}

  var scratchBuffer = new ArrayBuffer(16);
  var i32ScratchView = new Int32Array(scratchBuffer);
  var f32ScratchView = new Float32Array(scratchBuffer);
  var f64ScratchView = new Float64Array(scratchBuffer);
  
  function wasm2js_memory_fill(dest, value, size) {
    dest = dest >>> 0;
    size = size >>> 0;
    if (dest + size > bufferView.length) throw "trap: invalid memory.fill";
    bufferView.fill(value, dest, dest + size);
  }
      
  function wasm2js_memory_copy(dest, source, size) {
    // TODO: traps on invalid things
    bufferView.copyWithin(dest, source, source + size);
  }
      
function asmFunc(env) {
 var memory = env.memory;
 var buffer = memory.buffer;
 memory.grow = __wasm_memory_grow;
 var HEAP8 = new Int8Array(buffer);
 var HEAP16 = new Int16Array(buffer);
 var HEAP32 = new Int32Array(buffer);
 var HEAPU8 = new Uint8Array(buffer);
 var HEAPU16 = new Uint16Array(buffer);
 var HEAPU32 = new Uint32Array(buffer);
 var HEAPF32 = new Float32Array(buffer);
 var HEAPF64 = new Float64Array(buffer);
 var Math_imul = Math.imul;
 var Math_fround = Math.fround;
 var Math_abs = Math.abs;
 var Math_clz32 = Math.clz32;
 var Math_min = Math.min;
 var Math_max = Math.max;
 var Math_floor = Math.floor;
 var Math_ceil = Math.ceil;
 var Math_trunc = Math.trunc;
 var Math_sqrt = Math.sqrt;
 var abort = env.abort;
 var nan = NaN;
 var infinity = Infinity;
 var $lib_builtins_abort = env.abort;
 var assembly_as_callbacks_log = env.log;
 var $lib_rt_itcms_total = 0;
 var $lib_rt_itcms_threshold = 0;
 var $lib_rt_itcms_state = 0;
 var $lib_rt_itcms_visitCount = 0;
 var $lib_rt_itcms_pinSpace = 0;
 var $lib_rt_itcms_iter = 0;
 var $lib_rt_itcms_toSpace = 0;
 var $lib_rt_itcms_white = 0;
 var $lib_rt_itcms_fromSpace = 0;
 var $lib_rt_tlsf_ROOT = 0;
 var $lib_rt___rtti_base = 720;
 var $lib_memory___data_end = 756;
 var $lib_memory___stack_pointer = 17140;
 var $lib_memory___heap_base = 17140;
 var __wasm_intrinsics_temp_i64 = 0;
 var __wasm_intrinsics_temp_i64$hi = 0;
 var i64toi32_i32$HIGH_BITS = 0;
 function assembly_as_add($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return $0 + $1 | 0 | 0;
 }
 
 function $lib_string_String_get_length($0) {
  $0 = $0 | 0;
  return (HEAP32[(($0 - 20 | 0) + 16 | 0) >> 2] | 0) >>> 1 | 0 | 0;
 }
 
 function $lib_rt_itcms_Object_set_nextWithColor($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[($0 + 4 | 0) >> 2] = $1;
 }
 
 function $lib_rt_itcms_Object_set_prev($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[($0 + 8 | 0) >> 2] = $1;
 }
 
 function $lib_rt_itcms_initLazy($0) {
  $0 = $0 | 0;
  $lib_rt_itcms_Object_set_nextWithColor($0 | 0, $0 | 0);
  $lib_rt_itcms_Object_set_prev($0 | 0, $0 | 0);
  return $0 | 0;
 }
 
 function $lib_rt_itcms_Object_get_next($0) {
  $0 = $0 | 0;
  return (HEAP32[($0 + 4 | 0) >> 2] | 0) & (3 ^ -1 | 0) | 0 | 0;
 }
 
 function $lib_rt_itcms_Object_get_color($0) {
  $0 = $0 | 0;
  return (HEAP32[($0 + 4 | 0) >> 2] | 0) & 3 | 0 | 0;
 }
 
 function $lib_rt_itcms_visitRoots($0) {
  $0 = $0 | 0;
  var $2 = 0, $1 = 0;
  $lib_rt___visit_globals($0 | 0);
  $1 = $lib_rt_itcms_pinSpace;
  $2 = $lib_rt_itcms_Object_get_next($1 | 0) | 0;
  while_continue_0 : while (1) {
   if (($2 | 0) != ($1 | 0)) {
    if (!(($lib_rt_itcms_Object_get_color($2 | 0) | 0 | 0) == (3 | 0))) {
     $lib_builtins_abort(0 | 0, 176 | 0, 159 | 0, 16 | 0);
     abort();
    }
    $lib_rt___visit_members($2 + 20 | 0 | 0, $0 | 0);
    $2 = $lib_rt_itcms_Object_get_next($2 | 0) | 0;
    continue while_continue_0;
   }
   break while_continue_0;
  };
 }
 
 function $lib_rt_itcms_Object_set_color($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $lib_rt_itcms_Object_set_nextWithColor($0 | 0, (HEAP32[($0 + 4 | 0) >> 2] | 0) & (3 ^ -1 | 0) | 0 | $1 | 0 | 0);
 }
 
 function $lib_rt_itcms_Object_set_next($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $lib_rt_itcms_Object_set_nextWithColor($0 | 0, $1 | ((HEAP32[($0 + 4 | 0) >> 2] | 0) & 3 | 0) | 0 | 0);
 }
 
 function $lib_rt_itcms_Object_unlink($0) {
  $0 = $0 | 0;
  var $1 = 0, $2 = 0, $13 = 0;
  $1 = $lib_rt_itcms_Object_get_next($0 | 0) | 0;
  if (($1 | 0) == (0 | 0)) {
   if ((HEAP32[($0 + 8 | 0) >> 2] | 0 | 0) == (0 | 0)) {
    $13 = $0 >>> 0 < $lib_memory___heap_base >>> 0
   } else {
    $13 = 0
   }
   if (!$13) {
    $lib_builtins_abort(0 | 0, 176 | 0, 127 | 0, 18 | 0);
    abort();
   }
   return;
  }
  $2 = HEAP32[($0 + 8 | 0) >> 2] | 0;
  if (!$2) {
   $lib_builtins_abort(0 | 0, 176 | 0, 131 | 0, 16 | 0);
   abort();
  }
  $lib_rt_itcms_Object_set_prev($1 | 0, $2 | 0);
  $lib_rt_itcms_Object_set_next($2 | 0, $1 | 0);
 }
 
 function $lib_rt___typeinfo($0) {
  $0 = $0 | 0;
  var $1 = 0;
  $1 = $lib_rt___rtti_base;
  if ($0 >>> 0 > (HEAP32[$1 >> 2] | 0) >>> 0) {
   $lib_builtins_abort(304 | 0, 368 | 0, 22 | 0, 28 | 0);
   abort();
  }
  return HEAP32[(($1 + 4 | 0) + Math_imul($0, 8) | 0) >> 2] | 0 | 0;
 }
 
 function $lib_rt_itcms_Object_get_isPointerfree($0) {
  $0 = $0 | 0;
  var $1 = 0, $10 = 0;
  $1 = HEAP32[($0 + 12 | 0) >> 2] | 0;
  if ($1 >>> 0 <= 1 >>> 0) {
   $10 = 1
  } else {
   $10 = (($lib_rt___typeinfo($1 | 0) | 0) & 32 | 0 | 0) != (0 | 0)
  }
  return $10 | 0;
 }
 
 function $lib_rt_itcms_Object_linkTo($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0;
  $3 = HEAP32[($1 + 8 | 0) >> 2] | 0;
  $lib_rt_itcms_Object_set_nextWithColor($0 | 0, $1 | $2 | 0 | 0);
  $lib_rt_itcms_Object_set_prev($0 | 0, $3 | 0);
  $lib_rt_itcms_Object_set_next($3 | 0, $0 | 0);
  $lib_rt_itcms_Object_set_prev($1 | 0, $0 | 0);
 }
 
 function $lib_rt_itcms_Object_makeGray($0) {
  $0 = $0 | 0;
  var $1 = 0, $19 = 0, $10 = 0, $13 = 0, $14 = 0;
  if (($0 | 0) == ($lib_rt_itcms_iter | 0)) {
   $1 = HEAP32[($0 + 8 | 0) >> 2] | 0;
   if (!$1) {
    $lib_builtins_abort(0 | 0, 176 | 0, 147 | 0, 30 | 0);
    abort();
   } else {
    $10 = $1
   }
   $lib_rt_itcms_iter = $10;
  }
  $lib_rt_itcms_Object_unlink($0 | 0);
  $13 = $0;
  $14 = $lib_rt_itcms_toSpace;
  if ($lib_rt_itcms_Object_get_isPointerfree($0 | 0) | 0) {
   $19 = !$lib_rt_itcms_white
  } else {
   $19 = 2
  }
  $lib_rt_itcms_Object_linkTo($13 | 0, $14 | 0, $19 | 0);
 }
 
 function $lib_rt_itcms___visit($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  if (!$0) {
   return
  }
  $2 = $0 - 20 | 0;
  if (($lib_rt_itcms_Object_get_color($2 | 0) | 0 | 0) == ($lib_rt_itcms_white | 0)) {
   $lib_rt_itcms_Object_makeGray($2 | 0);
   $lib_rt_itcms_visitCount = $lib_rt_itcms_visitCount + 1 | 0;
  }
 }
 
 function $lib_rt_itcms_visitStack($0) {
  $0 = $0 | 0;
  var $1 = 0;
  $1 = $lib_memory___stack_pointer;
  while_continue_0 : while (1) {
   if ($1 >>> 0 < $lib_memory___heap_base >>> 0) {
    $lib_rt_itcms___visit(HEAP32[$1 >> 2] | 0 | 0, $0 | 0);
    $1 = $1 + 4 | 0;
    continue while_continue_0;
   }
   break while_continue_0;
  };
 }
 
 function $lib_rt_itcms_Object_get_size($0) {
  $0 = $0 | 0;
  return 4 + ((HEAP32[$0 >> 2] | 0) & (3 ^ -1 | 0) | 0) | 0 | 0;
 }
 
 function $lib_rt_tlsf_Root_set_flMap($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[$0 >> 2] = $1;
 }
 
 function $lib_rt_common_BLOCK_set_mmInfo($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[$0 >> 2] = $1;
 }
 
 function $lib_rt_tlsf_Block_set_prev($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[($0 + 4 | 0) >> 2] = $1;
 }
 
 function $lib_rt_tlsf_Block_set_next($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[($0 + 8 | 0) >> 2] = $1;
 }
 
 function $lib_rt_tlsf_removeBlock($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $6 = 0, $4 = 0, $7 = 0, $9 = 0, $5 = 0, $3 = 0, $8 = 0, $2 = 0, $50 = 0;
  $2 = HEAP32[$1 >> 2] | 0;
  if (!($2 & 1 | 0)) {
   $lib_builtins_abort(0 | 0, 448 | 0, 268 | 0, 14 | 0);
   abort();
  }
  $3 = $2 & (3 ^ -1 | 0) | 0;
  if (!($3 >>> 0 >= 12 >>> 0)) {
   $lib_builtins_abort(0 | 0, 448 | 0, 270 | 0, 14 | 0);
   abort();
  }
  if ($3 >>> 0 < 256 >>> 0) {
   $4 = 0;
   $5 = $3 >>> 4 | 0;
  } else {
   $6 = $3;
   $7 = 1073741820;
   $6 = $6 >>> 0 < $7 >>> 0 ? $6 : $7;
   $4 = 31 - Math_clz32($6) | 0;
   $5 = ($6 >>> ($4 - 4 | 0) | 0) ^ (1 << 4 | 0) | 0;
   $4 = $4 - (8 - 1 | 0) | 0;
  }
  if ($4 >>> 0 < 23 >>> 0) {
   $50 = $5 >>> 0 < 16 >>> 0
  } else {
   $50 = 0
  }
  if (!$50) {
   $lib_builtins_abort(0 | 0, 448 | 0, 284 | 0, 14 | 0);
   abort();
  }
  $8 = HEAP32[($1 + 4 | 0) >> 2] | 0;
  $9 = HEAP32[($1 + 8 | 0) >> 2] | 0;
  if ($8) {
   $lib_rt_tlsf_Block_set_next($8 | 0, $9 | 0)
  }
  if ($9) {
   $lib_rt_tlsf_Block_set_prev($9 | 0, $8 | 0)
  }
  $lib_rt_tlsf_GETHEAD_inlined_0 : {
   $6 = $4;
   $7 = $5;
  }
  if (($1 | 0) == (HEAP32[(($0 + ((($6 << 4 | 0) + $7 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] | 0 | 0)) {
   $lib_rt_tlsf_SETHEAD_inlined_1 : {
    $6 = $5;
    $7 = $9;
    HEAP32[(($0 + ((($4 << 4 | 0) + $6 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] = $9;
   }
   if (!$9) {
    $lib_rt_tlsf_GETSL_inlined_0 : {
     $6 = $0;
     $7 = $4;
    }
    $6 = HEAP32[(($6 + ($7 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
    $lib_rt_tlsf_SETSL_inlined_1 : {
     $7 = $0;
     $6 = $6 & ((1 << $5 | 0) ^ -1 | 0) | 0;
     HEAP32[(($0 + ($4 << 2 | 0) | 0) + 4 | 0) >> 2] = $6;
    }
    if (!$6) {
     $lib_rt_tlsf_Root_set_flMap($0 | 0, (HEAP32[$0 >> 2] | 0) & ((1 << $4 | 0) ^ -1 | 0) | 0 | 0)
    }
   }
  }
 }
 
 function $lib_rt_tlsf_insertBlock($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $3 = 0, $8 = 0, $6 = 0, $2 = 0, $4 = 0, $7 = 0, $9 = 0, $5 = 0, $10 = 0, $11 = 0, $127 = 0;
  if (!$1) {
   $lib_builtins_abort(0 | 0, 448 | 0, 201 | 0, 14 | 0);
   abort();
  }
  $2 = HEAP32[$1 >> 2] | 0;
  if (!($2 & 1 | 0)) {
   $lib_builtins_abort(0 | 0, 448 | 0, 203 | 0, 14 | 0);
   abort();
  }
  $3 = $1;
  $4 = ($3 + 4 | 0) + ((HEAP32[$3 >> 2] | 0) & (3 ^ -1 | 0) | 0) | 0;
  $5 = HEAP32[$4 >> 2] | 0;
  if ($5 & 1 | 0) {
   $lib_rt_tlsf_removeBlock($0 | 0, $4 | 0);
   $2 = ($2 + 4 | 0) + ($5 & (3 ^ -1 | 0) | 0) | 0;
   $lib_rt_common_BLOCK_set_mmInfo($1 | 0, $2 | 0);
   $3 = $1;
   $4 = ($3 + 4 | 0) + ((HEAP32[$3 >> 2] | 0) & (3 ^ -1 | 0) | 0) | 0;
   $5 = HEAP32[$4 >> 2] | 0;
  }
  if ($2 & 2 | 0) {
   $3 = $1;
   $3 = HEAP32[($3 - 4 | 0) >> 2] | 0;
   $6 = HEAP32[$3 >> 2] | 0;
   if (!($6 & 1 | 0)) {
    $lib_builtins_abort(0 | 0, 448 | 0, 221 | 0, 16 | 0);
    abort();
   }
   $lib_rt_tlsf_removeBlock($0 | 0, $3 | 0);
   $1 = $3;
   $2 = ($6 + 4 | 0) + ($2 & (3 ^ -1 | 0) | 0) | 0;
   $lib_rt_common_BLOCK_set_mmInfo($3 | 0, $2 | 0);
  }
  $lib_rt_common_BLOCK_set_mmInfo($4 | 0, $5 | 2 | 0 | 0);
  $7 = $2 & (3 ^ -1 | 0) | 0;
  if (!($7 >>> 0 >= 12 >>> 0)) {
   $lib_builtins_abort(0 | 0, 448 | 0, 233 | 0, 14 | 0);
   abort();
  }
  if (!((($1 + 4 | 0) + $7 | 0 | 0) == ($4 | 0))) {
   $lib_builtins_abort(0 | 0, 448 | 0, 234 | 0, 14 | 0);
   abort();
  }
  HEAP32[($4 - 4 | 0) >> 2] = $1;
  if ($7 >>> 0 < 256 >>> 0) {
   $8 = 0;
   $9 = $7 >>> 4 | 0;
  } else {
   $3 = $7;
   $6 = 1073741820;
   $3 = $3 >>> 0 < $6 >>> 0 ? $3 : $6;
   $8 = 31 - Math_clz32($3) | 0;
   $9 = ($3 >>> ($8 - 4 | 0) | 0) ^ (1 << 4 | 0) | 0;
   $8 = $8 - (8 - 1 | 0) | 0;
  }
  if ($8 >>> 0 < 23 >>> 0) {
   $127 = $9 >>> 0 < 16 >>> 0
  } else {
   $127 = 0
  }
  if (!$127) {
   $lib_builtins_abort(0 | 0, 448 | 0, 251 | 0, 14 | 0);
   abort();
  }
  $lib_rt_tlsf_GETHEAD_inlined_1 : {
   $10 = $0;
   $3 = $8;
   $6 = $9;
  }
  $11 = HEAP32[(($10 + ((($3 << 4 | 0) + $6 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] | 0;
  $lib_rt_tlsf_Block_set_prev($1 | 0, 0 | 0);
  $lib_rt_tlsf_Block_set_next($1 | 0, $11 | 0);
  if ($11) {
   $lib_rt_tlsf_Block_set_prev($11 | 0, $1 | 0)
  }
  $lib_rt_tlsf_SETHEAD_inlined_2 : {
   $10 = $8;
   $3 = $9;
   $6 = $1;
   HEAP32[(($0 + ((($8 << 4 | 0) + $3 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] = $1;
  }
  $lib_rt_tlsf_Root_set_flMap($0 | 0, HEAP32[$0 >> 2] | 0 | (1 << $8 | 0) | 0 | 0);
  $lib_rt_tlsf_SETSL_inlined_2 : {
   $lib_rt_tlsf_GETSL_inlined_1 : {
    $3 = $0;
    $6 = $8;
   }
   $10 = HEAP32[(($3 + ($6 << 2 | 0) | 0) + 4 | 0) >> 2] | 0 | (1 << $9 | 0) | 0;
   HEAP32[(($0 + ($8 << 2 | 0) | 0) + 4 | 0) >> 2] = $10;
  }
 }
 
 function $lib_rt_tlsf_addMemory($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
  if (!($1 >>> 0 <= $2 >>> 0)) {
   $lib_builtins_abort(0 | 0, 448 | 0, 377 | 0, 14 | 0);
   abort();
  }
  $1 = ((($1 + 4 | 0) + 15 | 0) & (15 ^ -1 | 0) | 0) - 4 | 0;
  $2 = $2 & (15 ^ -1 | 0) | 0;
  $4 = HEAP32[($0 + 1568 | 0) >> 2] | 0;
  $5 = 0;
  if ($4) {
   if (!($1 >>> 0 >= ($4 + 4 | 0) >>> 0)) {
    $lib_builtins_abort(0 | 0, 448 | 0, 384 | 0, 16 | 0);
    abort();
   }
   if (($1 - 16 | 0 | 0) == ($4 | 0)) {
    $1 = $1 - 16 | 0;
    $5 = HEAP32[$4 >> 2] | 0;
   }
  } else {
   if (!($1 >>> 0 >= ($0 + 1572 | 0) >>> 0)) {
    $lib_builtins_abort(0 | 0, 448 | 0, 397 | 0, 5 | 0);
    abort();
   }
  }
  $6 = $2 - $1 | 0;
  if ($6 >>> 0 < ((4 + 12 | 0) + 4 | 0) >>> 0) {
   return 0 | 0
  }
  $7 = $6 - Math_imul(2, 4) | 0;
  $8 = $1;
  $lib_rt_common_BLOCK_set_mmInfo($1 | 0, $7 | 1 | 0 | ($5 & 2 | 0) | 0 | 0);
  $lib_rt_tlsf_Block_set_prev($1 | 0, 0 | 0);
  $lib_rt_tlsf_Block_set_next($1 | 0, 0 | 0);
  $4 = ($1 + 4 | 0) + $7 | 0;
  $lib_rt_common_BLOCK_set_mmInfo($4 | 0, 0 | 2 | 0 | 0);
  HEAP32[($0 + 1568 | 0) >> 2] = $4;
  $lib_rt_tlsf_insertBlock($0 | 0, $8 | 0);
  return 1 | 0;
 }
 
 function $lib_rt_tlsf_initialize() {
  var $3 = 0, $5 = 0, $8 = 0, $0 = 0, $4 = 0, $6 = 0, $1 = 0, $2 = 0, $32 = 0;
  $0 = ($lib_memory___heap_base + 15 | 0) & (15 ^ -1 | 0) | 0;
  $1 = __wasm_memory_size();
  $2 = ((($0 + 1572 | 0) + 65535 | 0) & (65535 ^ -1 | 0) | 0) >>> 16 | 0;
  if (($2 | 0) > ($1 | 0)) {
   $32 = (__wasm_memory_grow($2 - $1 | 0 | 0) | 0) < (0 | 0)
  } else {
   $32 = 0
  }
  if ($32) {
   abort()
  }
  $3 = $0;
  $lib_rt_tlsf_Root_set_flMap($3 | 0, 0 | 0);
  $lib_rt_tlsf_SETTAIL_inlined_0 : {
   $5 = $3;
   $4 = 0;
   HEAP32[($3 + 1568 | 0) >> 2] = $4;
  }
  $5 = 0;
  for_loop_0 : while (1) {
   $4 = $5 >>> 0 < 23 >>> 0;
   if ($4) {
    for_continue_0 : {
     $lib_rt_tlsf_SETSL_inlined_0 : {
      $8 = $3;
      $6 = 0;
      HEAP32[(($3 + ($5 << 2 | 0) | 0) + 4 | 0) >> 2] = $6;
     }
     $8 = 0;
     for_loop_1 : while (1) {
      if ($8 >>> 0 < 16 >>> 0) {
       $lib_rt_tlsf_SETHEAD_inlined_0 : {
        $6 = 0;
        HEAP32[(($3 + ((($5 << 4 | 0) + $8 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] = $6;
       }
       $8 = $8 + 1 | 0;
       continue for_loop_1;
      }
      break for_loop_1;
     };
    }
    $5 = $5 + 1 | 0;
    continue for_loop_0;
   }
   break for_loop_0;
  };
  $lib_rt_tlsf_addMemory($3 | 0, $0 + 1572 | 0 | 0, __wasm_memory_size() << 16 | 0 | 0) | 0;
  $lib_rt_tlsf_ROOT = $3;
 }
 
 function $lib_rt_tlsf_checkUsedBlock($0) {
  $0 = $0 | 0;
  var $1 = 0, $9 = 0, $15 = 0;
  $1 = $0 - 4 | 0;
  if (($0 | 0) != (0 | 0)) {
   $9 = !($0 & 15 | 0)
  } else {
   $9 = 0
  }
  if ($9) {
   $15 = !((HEAP32[$1 >> 2] | 0) & 1 | 0)
  } else {
   $15 = 0
  }
  if (!$15) {
   $lib_builtins_abort(0 | 0, 448 | 0, 559 | 0, 3 | 0);
   abort();
  }
  return $1 | 0;
 }
 
 function $lib_rt_tlsf_freeBlock($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $lib_rt_common_BLOCK_set_mmInfo($1 | 0, HEAP32[$1 >> 2] | 0 | 1 | 0 | 0);
  $lib_rt_tlsf_insertBlock($0 | 0, $1 | 0);
 }
 
 function $lib_rt_tlsf___free($0) {
  $0 = $0 | 0;
  if ($0 >>> 0 < $lib_memory___heap_base >>> 0) {
   return
  }
  if (!$lib_rt_tlsf_ROOT) {
   $lib_rt_tlsf_initialize()
  }
  $lib_rt_tlsf_freeBlock($lib_rt_tlsf_ROOT | 0, $lib_rt_tlsf_checkUsedBlock($0 | 0) | 0 | 0);
 }
 
 function $lib_rt_itcms_free($0) {
  $0 = $0 | 0;
  if ($0 >>> 0 < $lib_memory___heap_base >>> 0) {
   $lib_rt_itcms_Object_set_nextWithColor($0 | 0, 0 | 0);
   $lib_rt_itcms_Object_set_prev($0 | 0, 0 | 0);
  } else {
   $lib_rt_itcms_total = $lib_rt_itcms_total - ($lib_rt_itcms_Object_get_size($0 | 0) | 0) | 0;
   $lib_rt_tlsf___free($0 + 4 | 0 | 0);
  }
 }
 
 function $lib_rt_itcms_step() {
  var $0 = 0, $1 = 0, $2 = 0;
  break_0 : {
   case2_0 : {
    case1_0 : {
     case0_0 : {
      $1 = $lib_rt_itcms_state;
      if (($1 | 0) == (0 | 0)) {
       break case0_0
      }
      if (($1 | 0) == (1 | 0)) {
       break case1_0
      }
      if (($1 | 0) == (2 | 0)) {
       break case2_0
      }
      break break_0;
     }
     $lib_rt_itcms_state = 1;
     $lib_rt_itcms_visitCount = 0;
     $lib_rt_itcms_visitRoots(0 | 0);
     $lib_rt_itcms_iter = $lib_rt_itcms_toSpace;
     return Math_imul($lib_rt_itcms_visitCount, 1) | 0;
    }
    $1 = !$lib_rt_itcms_white;
    $0 = $lib_rt_itcms_Object_get_next($lib_rt_itcms_iter | 0) | 0;
    while_continue_1 : while (1) {
     $2 = ($0 | 0) != ($lib_rt_itcms_toSpace | 0);
     if ($2) {
      $lib_rt_itcms_iter = $0;
      if (($lib_rt_itcms_Object_get_color($0 | 0) | 0 | 0) != ($1 | 0)) {
       $lib_rt_itcms_Object_set_color($0 | 0, $1 | 0);
       $lib_rt_itcms_visitCount = 0;
       $lib_rt___visit_members($0 + 20 | 0 | 0, 0 | 0);
       return Math_imul($lib_rt_itcms_visitCount, 1) | 0;
      }
      $0 = $lib_rt_itcms_Object_get_next($0 | 0) | 0;
      continue while_continue_1;
     }
     break while_continue_1;
    };
    $lib_rt_itcms_visitCount = 0;
    $lib_rt_itcms_visitRoots(0 | 0);
    $0 = $lib_rt_itcms_Object_get_next($lib_rt_itcms_iter | 0) | 0;
    if (($0 | 0) == ($lib_rt_itcms_toSpace | 0)) {
     $lib_rt_itcms_visitStack(0 | 0);
     $0 = $lib_rt_itcms_Object_get_next($lib_rt_itcms_iter | 0) | 0;
     while_continue_2 : while (1) {
      $2 = ($0 | 0) != ($lib_rt_itcms_toSpace | 0);
      if ($2) {
       if (($lib_rt_itcms_Object_get_color($0 | 0) | 0 | 0) != ($1 | 0)) {
        $lib_rt_itcms_Object_set_color($0 | 0, $1 | 0);
        $lib_rt___visit_members($0 + 20 | 0 | 0, 0 | 0);
       }
       $0 = $lib_rt_itcms_Object_get_next($0 | 0) | 0;
       continue while_continue_2;
      }
      break while_continue_2;
     };
     $2 = $lib_rt_itcms_fromSpace;
     $lib_rt_itcms_fromSpace = $lib_rt_itcms_toSpace;
     $lib_rt_itcms_toSpace = $2;
     $lib_rt_itcms_white = $1;
     $lib_rt_itcms_iter = $lib_rt_itcms_Object_get_next($2 | 0) | 0;
     $lib_rt_itcms_state = 2;
    }
    return Math_imul($lib_rt_itcms_visitCount, 1) | 0;
   }
   $0 = $lib_rt_itcms_iter;
   if (($0 | 0) != ($lib_rt_itcms_toSpace | 0)) {
    $lib_rt_itcms_iter = $lib_rt_itcms_Object_get_next($0 | 0) | 0;
    if (!(($lib_rt_itcms_Object_get_color($0 | 0) | 0 | 0) == (!$lib_rt_itcms_white | 0))) {
     $lib_builtins_abort(0 | 0, 176 | 0, 228 | 0, 20 | 0);
     abort();
    }
    $lib_rt_itcms_free($0 | 0);
    return 10 | 0;
   }
   $lib_rt_itcms_Object_set_nextWithColor($lib_rt_itcms_toSpace | 0, $lib_rt_itcms_toSpace | 0);
   $lib_rt_itcms_Object_set_prev($lib_rt_itcms_toSpace | 0, $lib_rt_itcms_toSpace | 0);
   $lib_rt_itcms_state = 0;
   break break_0;
  }
  return 0 | 0;
 }
 
 function $lib_rt_itcms_interrupt() {
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $0 = 0, $9$hi = 0, $10$hi = 0, $5 = 0;
  $0 = (Math_imul(1024, 200) >>> 0) / (100 >>> 0) | 0;
  do_loop_0 : while (1) {
   $0 = $0 - ($lib_rt_itcms_step() | 0) | 0;
   if (($lib_rt_itcms_state | 0) == (0 | 0)) {
    i64toi32_i32$0 = 0;
    $9$hi = i64toi32_i32$0;
    i64toi32_i32$0 = 0;
    $10$hi = i64toi32_i32$0;
    i64toi32_i32$0 = $9$hi;
    i64toi32_i32$1 = $10$hi;
    i64toi32_i32$1 = __wasm_i64_mul($lib_rt_itcms_total | 0, i64toi32_i32$0 | 0, 200 | 0, i64toi32_i32$1 | 0) | 0;
    i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
    $5 = i64toi32_i32$1;
    i64toi32_i32$1 = 0;
    i64toi32_i32$1 = __wasm_i64_udiv($5 | 0, i64toi32_i32$0 | 0, 100 | 0, i64toi32_i32$1 | 0) | 0;
    i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
    $lib_rt_itcms_threshold = i64toi32_i32$1 + 1024 | 0;
    return;
   }
   if (($0 | 0) > (0 | 0)) {
    continue do_loop_0
   }
   break do_loop_0;
  };
  $lib_rt_itcms_threshold = $lib_rt_itcms_total + Math_imul(1024, ($lib_rt_itcms_total - $lib_rt_itcms_threshold | 0) >>> 0 < 1024 >>> 0) | 0;
 }
 
 function $lib_rt_tlsf_computeSize($0) {
  $0 = $0 | 0;
  var $9 = 0;
  if ($0 >>> 0 <= 12 >>> 0) {
   $9 = 12
  } else {
   $9 = ((($0 + 4 | 0) + 15 | 0) & (15 ^ -1 | 0) | 0) - 4 | 0
  }
  return $9 | 0;
 }
 
 function $lib_rt_tlsf_prepareSize($0) {
  $0 = $0 | 0;
  if ($0 >>> 0 > 1073741820 >>> 0) {
   $lib_builtins_abort(112 | 0, 448 | 0, 458 | 0, 29 | 0);
   abort();
  }
  return $lib_rt_tlsf_computeSize($0 | 0) | 0 | 0;
 }
 
 function $lib_rt_tlsf_searchBlock($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $4 = 0, $6 = 0, $8 = 0, $5 = 0, $7 = 0, $3 = 0, $9 = 0, $24 = 0, $42 = 0;
  if ($1 >>> 0 < 256 >>> 0) {
   $2 = 0;
   $3 = $1 >>> 4 | 0;
  } else {
   if ($1 >>> 0 < 536870910 >>> 0) {
    $24 = ($1 + (1 << (27 - Math_clz32($1) | 0) | 0) | 0) - 1 | 0
   } else {
    $24 = $1
   }
   $4 = $24;
   $2 = 31 - Math_clz32($4) | 0;
   $3 = ($4 >>> ($2 - 4 | 0) | 0) ^ (1 << 4 | 0) | 0;
   $2 = $2 - (8 - 1 | 0) | 0;
  }
  if ($2 >>> 0 < 23 >>> 0) {
   $42 = $3 >>> 0 < 16 >>> 0
  } else {
   $42 = 0
  }
  if (!$42) {
   $lib_builtins_abort(0 | 0, 448 | 0, 330 | 0, 14 | 0);
   abort();
  }
  $lib_rt_tlsf_GETSL_inlined_2 : {
   $5 = $0;
   $4 = $2;
  }
  $6 = (HEAP32[(($5 + ($4 << 2 | 0) | 0) + 4 | 0) >> 2] | 0) & ((0 ^ -1 | 0) << $3 | 0) | 0;
  $7 = 0;
  if (!$6) {
   $5 = (HEAP32[$0 >> 2] | 0) & ((0 ^ -1 | 0) << ($2 + 1 | 0) | 0) | 0;
   if (!$5) {
    $7 = 0
   } else {
    $2 = __wasm_ctz_i32($5 | 0) | 0;
    $lib_rt_tlsf_GETSL_inlined_3 : {
     $8 = $0;
     $4 = $2;
    }
    $6 = HEAP32[(($8 + ($4 << 2 | 0) | 0) + 4 | 0) >> 2] | 0;
    if (!$6) {
     $lib_builtins_abort(0 | 0, 448 | 0, 343 | 0, 18 | 0);
     abort();
    }
    $lib_rt_tlsf_GETHEAD_inlined_2 : {
     $9 = $0;
     $8 = $2;
     $4 = __wasm_ctz_i32($6 | 0) | 0;
    }
    $7 = HEAP32[(($9 + ((($8 << 4 | 0) + $4 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] | 0;
   }
  } else {
   $lib_rt_tlsf_GETHEAD_inlined_3 : {
    $9 = $0;
    $8 = $2;
    $4 = __wasm_ctz_i32($6 | 0) | 0;
   }
   $7 = HEAP32[(($9 + ((($8 << 4 | 0) + $4 | 0) << 2 | 0) | 0) + 96 | 0) >> 2] | 0;
  }
  return $7 | 0;
 }
 
 function $lib_rt_tlsf_growMemory($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $4 = 0;
  if ($1 >>> 0 < 536870910 >>> 0) {
   $1 = $1 + ((1 << (27 - Math_clz32($1) | 0) | 0) - 1 | 0) | 0
  }
  $2 = __wasm_memory_size();
  $1 = $1 + (4 << ((($2 << 16 | 0) - 4 | 0 | 0) != (HEAP32[($0 + 1568 | 0) >> 2] | 0 | 0)) | 0) | 0;
  $4 = (($1 + 65535 | 0) & (65535 ^ -1 | 0) | 0) >>> 16 | 0;
  if ((__wasm_memory_grow((($2 | 0) > ($4 | 0) ? $2 : $4) | 0) | 0) < (0 | 0)) {
   if ((__wasm_memory_grow($4 | 0) | 0) < (0 | 0)) {
    abort()
   }
  }
  $lib_rt_tlsf_addMemory($0 | 0, $2 << 16 | 0 | 0, __wasm_memory_size() << 16 | 0 | 0) | 0;
 }
 
 function $lib_rt_tlsf_prepareBlock($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $5 = 0, $3 = 0, $4 = 0, $49 = 0;
  $3 = HEAP32[$1 >> 2] | 0;
  if (!!(($2 + 4 | 0) & 15 | 0)) {
   $lib_builtins_abort(0 | 0, 448 | 0, 357 | 0, 14 | 0);
   abort();
  }
  $4 = ($3 & (3 ^ -1 | 0) | 0) - $2 | 0;
  if ($4 >>> 0 >= (4 + 12 | 0) >>> 0) {
   $lib_rt_common_BLOCK_set_mmInfo($1 | 0, $2 | ($3 & 2 | 0) | 0 | 0);
   $5 = ($1 + 4 | 0) + $2 | 0;
   $lib_rt_common_BLOCK_set_mmInfo($5 | 0, $4 - 4 | 0 | 1 | 0 | 0);
   $lib_rt_tlsf_insertBlock($0 | 0, $5 | 0);
  } else {
   $lib_rt_common_BLOCK_set_mmInfo($1 | 0, $3 & (1 ^ -1 | 0) | 0 | 0);
   $5 = $1;
   $49 = ($5 + 4 | 0) + ((HEAP32[$5 >> 2] | 0) & (3 ^ -1 | 0) | 0) | 0;
   $5 = $1;
   $lib_rt_common_BLOCK_set_mmInfo($49 | 0, (HEAP32[(($5 + 4 | 0) + ((HEAP32[$5 >> 2] | 0) & (3 ^ -1 | 0) | 0) | 0) >> 2] | 0) & (2 ^ -1 | 0) | 0 | 0);
  }
 }
 
 function $lib_rt_tlsf_allocateBlock($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $3 = 0, $2 = 0;
  $2 = $lib_rt_tlsf_prepareSize($1 | 0) | 0;
  $3 = $lib_rt_tlsf_searchBlock($0 | 0, $2 | 0) | 0;
  if (!$3) {
   $lib_rt_tlsf_growMemory($0 | 0, $2 | 0);
   $3 = $lib_rt_tlsf_searchBlock($0 | 0, $2 | 0) | 0;
   if (!$3) {
    $lib_builtins_abort(0 | 0, 448 | 0, 496 | 0, 16 | 0);
    abort();
   }
  }
  if (!(((HEAP32[$3 >> 2] | 0) & (3 ^ -1 | 0) | 0) >>> 0 >= $2 >>> 0)) {
   $lib_builtins_abort(0 | 0, 448 | 0, 498 | 0, 14 | 0);
   abort();
  }
  $lib_rt_tlsf_removeBlock($0 | 0, $3 | 0);
  $lib_rt_tlsf_prepareBlock($0 | 0, $3 | 0, $2 | 0);
  return $3 | 0;
 }
 
 function $lib_rt_tlsf___alloc($0) {
  $0 = $0 | 0;
  if (!$lib_rt_tlsf_ROOT) {
   $lib_rt_tlsf_initialize()
  }
  return ($lib_rt_tlsf_allocateBlock($lib_rt_tlsf_ROOT | 0, $0 | 0) | 0) + 4 | 0 | 0;
 }
 
 function $lib_rt_itcms_Object_set_rtId($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[($0 + 12 | 0) >> 2] = $1;
 }
 
 function $lib_rt_itcms_Object_set_rtSize($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[($0 + 16 | 0) >> 2] = $1;
 }
 
 function $lib_rt_itcms___new($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0;
  if ($0 >>> 0 >= 1073741804 >>> 0) {
   $lib_builtins_abort(112 | 0, 176 | 0, 260 | 0, 31 | 0);
   abort();
  }
  if ($lib_rt_itcms_total >>> 0 >= $lib_rt_itcms_threshold >>> 0) {
   $lib_rt_itcms_interrupt()
  }
  $2 = ($lib_rt_tlsf___alloc(16 + $0 | 0 | 0) | 0) - 4 | 0;
  $lib_rt_itcms_Object_set_rtId($2 | 0, $1 | 0);
  $lib_rt_itcms_Object_set_rtSize($2 | 0, $0 | 0);
  $lib_rt_itcms_Object_linkTo($2 | 0, $lib_rt_itcms_fromSpace | 0, $lib_rt_itcms_white | 0);
  $lib_rt_itcms_total = $lib_rt_itcms_total + ($lib_rt_itcms_Object_get_size($2 | 0) | 0) | 0;
  $3 = $2 + 20 | 0;
  wasm2js_memory_fill($3, 0, $0);
  return $3 | 0;
 }
 
 function $lib_string_String___concat($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return $lib_string_String_concat($0 | 0, $1 | 0) | 0 | 0;
 }
 
 function $lib_array_Array_i32__get_length($0) {
  $0 = $0 | 0;
  return HEAP32[($0 + 12 | 0) >> 2] | 0 | 0;
 }
 
 function $lib_array_Array_i32____get($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  if ($1 >>> 0 >= (HEAP32[($0 + 12 | 0) >> 2] | 0) >>> 0) {
   $lib_builtins_abort(304 | 0, 512 | 0, 114 | 0, 42 | 0);
   abort();
  }
  return HEAP32[((HEAP32[($0 + 4 | 0) >> 2] | 0) + ($1 << 2 | 0) | 0) >> 2] | 0 | 0;
 }
 
 function assembly_as_sum($0) {
  $0 = $0 | 0;
  var $2 = 0, $1 = 0;
  $1 = 0;
  $2 = 0;
  for_loop_0 : while (1) {
   if (($2 | 0) < ($lib_array_Array_i32__get_length($0 | 0) | 0 | 0)) {
    $1 = $1 + ($lib_array_Array_i32____get($0 | 0, $2 | 0) | 0) | 0;
    $2 = $2 + 1 | 0;
    continue for_loop_0;
   }
   break for_loop_0;
  };
  return $1 | 0;
 }
 
 function assembly_as_mem($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $3 = 0, $2 = 0;
  $2 = 0;
  $3 = $0;
  for_loop_0 : while (1) {
   if (($3 | 0) < ($1 | 0)) {
    for_continue_0 : {
     $2 = $2 + (Atomics.load(HEAP32, Math_imul($3, 4) >> 2) | 0) | 0;
     Atomics.store(HEAP32, Math_imul($3, 4) >> 2, 0);
    }
    $3 = $3 + 1 | 0;
    continue for_loop_0;
   }
   break for_loop_0;
  };
  return $2 | 0;
 }
 
 function assembly_as_factorial($0) {
  $0 = $0 | 0;
  var $2 = 0, $1 = 0;
  $1 = 1;
  $2 = $0;
  for_loop_0 : while (1) {
   if (($2 | 0) > (0 | 0)) {
    $1 = Math_imul($1, $2);
    $2 = $2 - 1 | 0;
    continue for_loop_0;
   }
   break for_loop_0;
  };
  return $1 | 0;
 }
 
 function $lib_rt_itcms___pin($0) {
  $0 = $0 | 0;
  var $1 = 0;
  if ($0) {
   $1 = $0 - 20 | 0;
   if (($lib_rt_itcms_Object_get_color($1 | 0) | 0 | 0) == (3 | 0)) {
    $lib_builtins_abort(608 | 0, 176 | 0, 337 | 0, 7 | 0);
    abort();
   }
   $lib_rt_itcms_Object_unlink($1 | 0);
   $lib_rt_itcms_Object_linkTo($1 | 0, $lib_rt_itcms_pinSpace | 0, 3 | 0);
  }
  return $0 | 0;
 }
 
 function $lib_rt_itcms___unpin($0) {
  $0 = $0 | 0;
  var $1 = 0;
  if (!$0) {
   return
  }
  $1 = $0 - 20 | 0;
  if (($lib_rt_itcms_Object_get_color($1 | 0) | 0 | 0) != (3 | 0)) {
   $lib_builtins_abort(672 | 0, 176 | 0, 351 | 0, 5 | 0);
   abort();
  }
  if (($lib_rt_itcms_state | 0) == (1 | 0)) {
   $lib_rt_itcms_Object_makeGray($1 | 0)
  } else {
   $lib_rt_itcms_Object_unlink($1 | 0);
   $lib_rt_itcms_Object_linkTo($1 | 0, $lib_rt_itcms_fromSpace | 0, $lib_rt_itcms_white | 0);
  }
 }
 
 function $lib_rt_itcms___collect() {
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $0 = 0, $13$hi = 0, $14$hi = 0, $5 = 0;
  if (($lib_rt_itcms_state | 0) > (0 | 0)) {
   while_continue_0 : while (1) {
    $0 = ($lib_rt_itcms_state | 0) != (0 | 0);
    if ($0) {
     $lib_rt_itcms_step() | 0;
     continue while_continue_0;
    }
    break while_continue_0;
   }
  }
  $lib_rt_itcms_step() | 0;
  while_continue_1 : while (1) {
   $0 = ($lib_rt_itcms_state | 0) != (0 | 0);
   if ($0) {
    $lib_rt_itcms_step() | 0;
    continue while_continue_1;
   }
   break while_continue_1;
  };
  i64toi32_i32$0 = 0;
  $13$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  $14$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $13$hi;
  i64toi32_i32$1 = $14$hi;
  i64toi32_i32$1 = __wasm_i64_mul($lib_rt_itcms_total | 0, i64toi32_i32$0 | 0, 200 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $5 = i64toi32_i32$1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$1 = __wasm_i64_udiv($5 | 0, i64toi32_i32$0 | 0, 100 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $lib_rt_itcms_threshold = i64toi32_i32$1 + 1024 | 0;
 }
 
 function $lib_rt___visit_globals($0) {
  $0 = $0 | 0;
  $lib_rt_itcms___visit(304 | 0, $0 | 0);
  $lib_rt_itcms___visit(112 | 0, $0 | 0);
  $lib_rt_itcms___visit(608 | 0, $0 | 0);
  $lib_rt_itcms___visit(672 | 0, $0 | 0);
 }
 
 function $lib_arraybuffer_ArrayBufferView_visit($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  $2 = HEAP32[$0 >> 2] | 0;
  if ($2) {
   $lib_rt_itcms___visit($2 | 0, $1 | 0)
  }
 }
 
 function $lib_array_Array_i32____visit($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $lib_rt_itcms___visit(HEAP32[$0 >> 2] | 0 | 0, $1 | 0);
 }
 
 function $lib_array_Array_i32__visit($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $lib_array_Array_i32____visit($0 | 0, $1 | 0);
 }
 
 function $lib_rt___visit_members($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  invalid : {
   switch (HEAP32[($0 - 8 | 0) >> 2] | 0 | 0) {
   case 0:
    return;
   case 1:
    return;
   case 2:
    $lib_arraybuffer_ArrayBufferView_visit($0 | 0, $1 | 0);
    return;
   case 3:
    $lib_array_Array_i32__visit($0 | 0, $1 | 0);
    return;
   default:
    break invalid;
   };
  }
  abort();
 }
 
 function $start() {
  $lib_rt_itcms_threshold = ((__wasm_memory_size() << 16 | 0) - $lib_memory___heap_base | 0) >>> 1 | 0;
  $lib_rt_itcms_pinSpace = $lib_rt_itcms_initLazy(224 | 0) | 0;
  $lib_rt_itcms_toSpace = $lib_rt_itcms_initLazy(256 | 0) | 0;
  $lib_rt_itcms_fromSpace = $lib_rt_itcms_initLazy(400 | 0) | 0;
 }
 
 function $stack_check() {
  if (($lib_memory___stack_pointer | 0) < ($lib_memory___data_end | 0)) {
   $lib_builtins_abort(17168 | 0, 17216 | 0, 1 | 0, 1 | 0);
   abort();
  }
 }
 
 function assembly_as_str($0) {
  $0 = $0 | 0;
  var $1 = 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer - 4 | 0;
  $stack_check();
  HEAP32[$lib_memory___stack_pointer >> 2] = 0;
  $1 = 32;
  HEAP32[$lib_memory___stack_pointer >> 2] = $1;
  $1 = $lib_string_String___concat($0 | 0, $1 | 0) | 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer + 4 | 0;
  return $1 | 0;
 }
 
 function assembly_as_callback() {
  var $0 = 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer - 4 | 0;
  $stack_check();
  HEAP32[$lib_memory___stack_pointer >> 2] = 0;
  $0 = 560;
  HEAP32[$lib_memory___stack_pointer >> 2] = $0;
  assembly_as_callbacks_log($0 | 0);
  $lib_memory___stack_pointer = $lib_memory___stack_pointer + 4 | 0;
 }
 
 function $lib_string_String_concat($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $5 = 0, $2 = 0, $3 = 0, $4 = 0, $24 = 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer - 4 | 0;
  $stack_check();
  HEAP32[$lib_memory___stack_pointer >> 2] = 0;
  $2 = ($lib_string_String_get_length($0 | 0) | 0) << 1 | 0;
  $3 = ($lib_string_String_get_length($1 | 0) | 0) << 1 | 0;
  $4 = $2 + $3 | 0;
  if (($4 | 0) == (0 | 0)) {
   $lib_memory___stack_pointer = $lib_memory___stack_pointer + 4 | 0;
   return 80 | 0;
  }
  $24 = $lib_memory___stack_pointer;
  $5 = $lib_rt_itcms___new($4 | 0, 1 | 0) | 0;
  HEAP32[$24 >> 2] = $5;
  wasm2js_memory_copy($5, $0, $2);
  wasm2js_memory_copy($5 + $2 | 0, $1, $3);
  $lib_memory___stack_pointer = $lib_memory___stack_pointer + 4 | 0;
  return $5 | 0;
 }
 
 function export_assembly_as_str($0) {
  $0 = $0 | 0;
  var $1 = 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer - 4 | 0;
  $stack_check();
  HEAP32[$lib_memory___stack_pointer >> 2] = $0;
  $1 = assembly_as_str($0 | 0) | 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer + 4 | 0;
  return $1 | 0;
 }
 
 function export_assembly_as_sum($0) {
  $0 = $0 | 0;
  var $1 = 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer - 4 | 0;
  $stack_check();
  HEAP32[$lib_memory___stack_pointer >> 2] = $0;
  $1 = assembly_as_sum($0 | 0) | 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer + 4 | 0;
  return $1 | 0;
 }
 
 function _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$4 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, var$2 = 0, i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, var$3 = 0, var$4 = 0, var$5 = 0, $21 = 0, $22 = 0, var$6 = 0, $24 = 0, $17 = 0, $18 = 0, $23 = 0, $29 = 0, $45 = 0, $56$hi = 0, $62$hi = 0;
  i64toi32_i32$0 = var$1$hi;
  var$2 = var$1;
  var$4 = var$2 >>> 16 | 0;
  i64toi32_i32$0 = var$0$hi;
  var$3 = var$0;
  var$5 = var$3 >>> 16 | 0;
  $17 = Math_imul(var$4, var$5);
  $18 = var$2;
  i64toi32_i32$2 = var$3;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = 0;
   $21 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $21 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  $23 = $17 + Math_imul($18, $21) | 0;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$0 = var$1;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $22 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   $22 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
  }
  $29 = $23 + Math_imul($22, var$3) | 0;
  var$2 = var$2 & 65535 | 0;
  var$3 = var$3 & 65535 | 0;
  var$6 = Math_imul(var$2, var$3);
  var$2 = (var$6 >>> 16 | 0) + Math_imul(var$2, var$5) | 0;
  $45 = $29 + (var$2 >>> 16 | 0) | 0;
  var$2 = (var$2 & 65535 | 0) + Math_imul(var$4, var$3) | 0;
  i64toi32_i32$2 = 0;
  i64toi32_i32$1 = $45 + (var$2 >>> 16 | 0) | 0;
  i64toi32_i32$0 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$0 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
   $24 = 0;
  } else {
   i64toi32_i32$0 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$1 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$2 << i64toi32_i32$4 | 0) | 0;
   $24 = i64toi32_i32$1 << i64toi32_i32$4 | 0;
  }
  $56$hi = i64toi32_i32$0;
  i64toi32_i32$0 = 0;
  $62$hi = i64toi32_i32$0;
  i64toi32_i32$0 = $56$hi;
  i64toi32_i32$2 = $24;
  i64toi32_i32$1 = $62$hi;
  i64toi32_i32$3 = var$2 << 16 | 0 | (var$6 & 65535 | 0) | 0;
  i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
  i64toi32_i32$2 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
  return i64toi32_i32$2 | 0;
 }
 
 function _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, i64toi32_i32$4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$5 = 0, var$2 = 0, var$3 = 0, var$4 = 0, var$5 = 0, var$5$hi = 0, var$6 = 0, var$6$hi = 0, i64toi32_i32$6 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, var$8$hi = 0, $47 = 0, $48 = 0, $49 = 0, $50 = 0, var$7$hi = 0, $51 = 0, $63$hi = 0, $65 = 0, $65$hi = 0, $70 = 0, $119 = 0, $120$hi = 0, $129$hi = 0, $134$hi = 0, var$8 = 0, $140 = 0, $140$hi = 0, $142$hi = 0, $144 = 0, $144$hi = 0, $151 = 0, $151$hi = 0, $154$hi = 0, var$7 = 0, $165$hi = 0;
  label$1 : {
   label$2 : {
    label$3 : {
     label$4 : {
      label$5 : {
       label$6 : {
        label$7 : {
         label$8 : {
          label$9 : {
           label$10 : {
            label$11 : {
             i64toi32_i32$0 = var$0$hi;
             i64toi32_i32$2 = var$0;
             i64toi32_i32$1 = 0;
             i64toi32_i32$3 = 32;
             i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
             if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
              i64toi32_i32$1 = 0;
              $39 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
             } else {
              i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
              $39 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
             }
             var$2 = $39;
             if (var$2) {
              block : {
               i64toi32_i32$1 = var$1$hi;
               var$3 = var$1;
               if (!var$3) {
                break label$11
               }
               i64toi32_i32$1 = var$1$hi;
               i64toi32_i32$0 = var$1;
               i64toi32_i32$2 = 0;
               i64toi32_i32$3 = 32;
               i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
               if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
                i64toi32_i32$2 = 0;
                $40 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
               } else {
                i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
                $40 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
               }
               var$4 = $40;
               if (!var$4) {
                break label$9
               }
               var$2 = Math_clz32(var$4) - Math_clz32(var$2) | 0;
               if (var$2 >>> 0 <= 31 >>> 0) {
                break label$8
               }
               break label$2;
              }
             }
             i64toi32_i32$2 = var$1$hi;
             i64toi32_i32$1 = var$1;
             i64toi32_i32$0 = 1;
             i64toi32_i32$3 = 0;
             if (i64toi32_i32$2 >>> 0 > i64toi32_i32$0 >>> 0 | ((i64toi32_i32$2 | 0) == (i64toi32_i32$0 | 0) & i64toi32_i32$1 >>> 0 >= i64toi32_i32$3 >>> 0 | 0) | 0) {
              break label$2
             }
             i64toi32_i32$1 = var$0$hi;
             var$2 = var$0;
             i64toi32_i32$1 = var$1$hi;
             var$3 = var$1;
             var$2 = (var$2 >>> 0) / (var$3 >>> 0) | 0;
             i64toi32_i32$1 = 0;
             __wasm_intrinsics_temp_i64 = var$0 - Math_imul(var$2, var$3) | 0;
             __wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
             i64toi32_i32$1 = 0;
             i64toi32_i32$2 = var$2;
             i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
             return i64toi32_i32$2 | 0;
            }
            i64toi32_i32$2 = var$1$hi;
            i64toi32_i32$3 = var$1;
            i64toi32_i32$1 = 0;
            i64toi32_i32$0 = 32;
            i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
            if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
             i64toi32_i32$1 = 0;
             $41 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
            } else {
             i64toi32_i32$1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
             $41 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$4 | 0) | 0;
            }
            var$3 = $41;
            i64toi32_i32$1 = var$0$hi;
            if (!var$0) {
             break label$7
            }
            if (!var$3) {
             break label$6
            }
            var$4 = var$3 + -1 | 0;
            if (var$4 & var$3 | 0) {
             break label$6
            }
            i64toi32_i32$1 = 0;
            i64toi32_i32$2 = var$4 & var$2 | 0;
            i64toi32_i32$3 = 0;
            i64toi32_i32$0 = 32;
            i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
            if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
             i64toi32_i32$3 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
             $42 = 0;
            } else {
             i64toi32_i32$3 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
             $42 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
            }
            $63$hi = i64toi32_i32$3;
            i64toi32_i32$3 = var$0$hi;
            i64toi32_i32$1 = var$0;
            i64toi32_i32$2 = 0;
            i64toi32_i32$0 = -1;
            i64toi32_i32$2 = i64toi32_i32$3 & i64toi32_i32$2 | 0;
            $65 = i64toi32_i32$1 & i64toi32_i32$0 | 0;
            $65$hi = i64toi32_i32$2;
            i64toi32_i32$2 = $63$hi;
            i64toi32_i32$3 = $42;
            i64toi32_i32$1 = $65$hi;
            i64toi32_i32$0 = $65;
            i64toi32_i32$1 = i64toi32_i32$2 | i64toi32_i32$1 | 0;
            __wasm_intrinsics_temp_i64 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
            __wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
            $70 = (__wasm_ctz_i32(var$3 | 0) | 0) & 31 | 0;
            i64toi32_i32$1 = 0;
            i64toi32_i32$3 = var$2 >>> $70 | 0;
            i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
            return i64toi32_i32$3 | 0;
           }
          }
          var$4 = var$3 + -1 | 0;
          if (!(var$4 & var$3 | 0)) {
           break label$5
          }
          var$2 = (Math_clz32(var$3) + 33 | 0) - Math_clz32(var$2) | 0;
          var$3 = 0 - var$2 | 0;
          break label$3;
         }
         var$3 = 63 - var$2 | 0;
         var$2 = var$2 + 1 | 0;
         break label$3;
        }
        var$4 = (var$2 >>> 0) / (var$3 >>> 0) | 0;
        i64toi32_i32$3 = 0;
        i64toi32_i32$2 = var$2 - Math_imul(var$4, var$3) | 0;
        i64toi32_i32$1 = 0;
        i64toi32_i32$0 = 32;
        i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
         $43 = 0;
        } else {
         i64toi32_i32$1 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
         $43 = i64toi32_i32$2 << i64toi32_i32$4 | 0;
        }
        __wasm_intrinsics_temp_i64 = $43;
        __wasm_intrinsics_temp_i64$hi = i64toi32_i32$1;
        i64toi32_i32$1 = 0;
        i64toi32_i32$2 = var$4;
        i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
        return i64toi32_i32$2 | 0;
       }
       var$2 = Math_clz32(var$3) - Math_clz32(var$2) | 0;
       if (var$2 >>> 0 < 31 >>> 0) {
        break label$4
       }
       break label$2;
      }
      i64toi32_i32$2 = var$0$hi;
      i64toi32_i32$2 = 0;
      __wasm_intrinsics_temp_i64 = var$4 & var$0 | 0;
      __wasm_intrinsics_temp_i64$hi = i64toi32_i32$2;
      if ((var$3 | 0) == (1 | 0)) {
       break label$1
      }
      i64toi32_i32$2 = var$0$hi;
      $119 = __wasm_ctz_i32(var$3 | 0) | 0;
      i64toi32_i32$2 = 0;
      $120$hi = i64toi32_i32$2;
      i64toi32_i32$2 = var$0$hi;
      i64toi32_i32$3 = var$0;
      i64toi32_i32$1 = $120$hi;
      i64toi32_i32$0 = $119;
      i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
      if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
       i64toi32_i32$1 = 0;
       $44 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
      } else {
       i64toi32_i32$1 = i64toi32_i32$2 >>> i64toi32_i32$4 | 0;
       $44 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$2 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$3 >>> i64toi32_i32$4 | 0) | 0;
      }
      i64toi32_i32$3 = $44;
      i64toi32_i32$HIGH_BITS = i64toi32_i32$1;
      return i64toi32_i32$3 | 0;
     }
     var$3 = 63 - var$2 | 0;
     var$2 = var$2 + 1 | 0;
    }
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$3 = 0;
    $129$hi = i64toi32_i32$3;
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$2 = var$0;
    i64toi32_i32$1 = $129$hi;
    i64toi32_i32$0 = var$2 & 63 | 0;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$1 = 0;
     $45 = i64toi32_i32$3 >>> i64toi32_i32$4 | 0;
    } else {
     i64toi32_i32$1 = i64toi32_i32$3 >>> i64toi32_i32$4 | 0;
     $45 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$3 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
    }
    var$5 = $45;
    var$5$hi = i64toi32_i32$1;
    i64toi32_i32$1 = var$0$hi;
    i64toi32_i32$1 = 0;
    $134$hi = i64toi32_i32$1;
    i64toi32_i32$1 = var$0$hi;
    i64toi32_i32$3 = var$0;
    i64toi32_i32$2 = $134$hi;
    i64toi32_i32$0 = var$3 & 63 | 0;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
     $46 = 0;
    } else {
     i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$3 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$1 << i64toi32_i32$4 | 0) | 0;
     $46 = i64toi32_i32$3 << i64toi32_i32$4 | 0;
    }
    var$0 = $46;
    var$0$hi = i64toi32_i32$2;
    label$13 : {
     if (var$2) {
      block3 : {
       i64toi32_i32$2 = var$1$hi;
       i64toi32_i32$1 = var$1;
       i64toi32_i32$3 = -1;
       i64toi32_i32$0 = -1;
       i64toi32_i32$4 = i64toi32_i32$1 + i64toi32_i32$0 | 0;
       i64toi32_i32$5 = i64toi32_i32$2 + i64toi32_i32$3 | 0;
       if (i64toi32_i32$4 >>> 0 < i64toi32_i32$0 >>> 0) {
        i64toi32_i32$5 = i64toi32_i32$5 + 1 | 0
       }
       var$8 = i64toi32_i32$4;
       var$8$hi = i64toi32_i32$5;
       label$15 : while (1) {
        i64toi32_i32$5 = var$5$hi;
        i64toi32_i32$2 = var$5;
        i64toi32_i32$1 = 0;
        i64toi32_i32$0 = 1;
        i64toi32_i32$3 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$1 = i64toi32_i32$2 << i64toi32_i32$3 | 0;
         $47 = 0;
        } else {
         i64toi32_i32$1 = ((1 << i64toi32_i32$3 | 0) - 1 | 0) & (i64toi32_i32$2 >>> (32 - i64toi32_i32$3 | 0) | 0) | 0 | (i64toi32_i32$5 << i64toi32_i32$3 | 0) | 0;
         $47 = i64toi32_i32$2 << i64toi32_i32$3 | 0;
        }
        $140 = $47;
        $140$hi = i64toi32_i32$1;
        i64toi32_i32$1 = var$0$hi;
        i64toi32_i32$5 = var$0;
        i64toi32_i32$2 = 0;
        i64toi32_i32$0 = 63;
        i64toi32_i32$3 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$2 = 0;
         $48 = i64toi32_i32$1 >>> i64toi32_i32$3 | 0;
        } else {
         i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$3 | 0;
         $48 = (((1 << i64toi32_i32$3 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$3 | 0) | 0 | (i64toi32_i32$5 >>> i64toi32_i32$3 | 0) | 0;
        }
        $142$hi = i64toi32_i32$2;
        i64toi32_i32$2 = $140$hi;
        i64toi32_i32$1 = $140;
        i64toi32_i32$5 = $142$hi;
        i64toi32_i32$0 = $48;
        i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
        var$5 = i64toi32_i32$1 | i64toi32_i32$0 | 0;
        var$5$hi = i64toi32_i32$5;
        $144 = var$5;
        $144$hi = i64toi32_i32$5;
        i64toi32_i32$5 = var$8$hi;
        i64toi32_i32$5 = var$5$hi;
        i64toi32_i32$5 = var$8$hi;
        i64toi32_i32$2 = var$8;
        i64toi32_i32$1 = var$5$hi;
        i64toi32_i32$0 = var$5;
        i64toi32_i32$3 = i64toi32_i32$2 - i64toi32_i32$0 | 0;
        i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$0 >>> 0;
        i64toi32_i32$4 = i64toi32_i32$6 + i64toi32_i32$1 | 0;
        i64toi32_i32$4 = i64toi32_i32$5 - i64toi32_i32$4 | 0;
        i64toi32_i32$5 = i64toi32_i32$3;
        i64toi32_i32$2 = 0;
        i64toi32_i32$0 = 63;
        i64toi32_i32$1 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$2 = i64toi32_i32$4 >> 31 | 0;
         $49 = i64toi32_i32$4 >> i64toi32_i32$1 | 0;
        } else {
         i64toi32_i32$2 = i64toi32_i32$4 >> i64toi32_i32$1 | 0;
         $49 = (((1 << i64toi32_i32$1 | 0) - 1 | 0) & i64toi32_i32$4 | 0) << (32 - i64toi32_i32$1 | 0) | 0 | (i64toi32_i32$5 >>> i64toi32_i32$1 | 0) | 0;
        }
        var$6 = $49;
        var$6$hi = i64toi32_i32$2;
        i64toi32_i32$2 = var$1$hi;
        i64toi32_i32$2 = var$6$hi;
        i64toi32_i32$4 = var$6;
        i64toi32_i32$5 = var$1$hi;
        i64toi32_i32$0 = var$1;
        i64toi32_i32$5 = i64toi32_i32$2 & i64toi32_i32$5 | 0;
        $151 = i64toi32_i32$4 & i64toi32_i32$0 | 0;
        $151$hi = i64toi32_i32$5;
        i64toi32_i32$5 = $144$hi;
        i64toi32_i32$2 = $144;
        i64toi32_i32$4 = $151$hi;
        i64toi32_i32$0 = $151;
        i64toi32_i32$1 = i64toi32_i32$2 - i64toi32_i32$0 | 0;
        i64toi32_i32$6 = i64toi32_i32$2 >>> 0 < i64toi32_i32$0 >>> 0;
        i64toi32_i32$3 = i64toi32_i32$6 + i64toi32_i32$4 | 0;
        i64toi32_i32$3 = i64toi32_i32$5 - i64toi32_i32$3 | 0;
        var$5 = i64toi32_i32$1;
        var$5$hi = i64toi32_i32$3;
        i64toi32_i32$3 = var$0$hi;
        i64toi32_i32$5 = var$0;
        i64toi32_i32$2 = 0;
        i64toi32_i32$0 = 1;
        i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
        if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
         i64toi32_i32$2 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
         $50 = 0;
        } else {
         i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$5 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
         $50 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
        }
        $154$hi = i64toi32_i32$2;
        i64toi32_i32$2 = var$7$hi;
        i64toi32_i32$2 = $154$hi;
        i64toi32_i32$3 = $50;
        i64toi32_i32$5 = var$7$hi;
        i64toi32_i32$0 = var$7;
        i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
        var$0 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
        var$0$hi = i64toi32_i32$5;
        i64toi32_i32$5 = var$6$hi;
        i64toi32_i32$2 = var$6;
        i64toi32_i32$3 = 0;
        i64toi32_i32$0 = 1;
        i64toi32_i32$3 = i64toi32_i32$5 & i64toi32_i32$3 | 0;
        var$6 = i64toi32_i32$2 & i64toi32_i32$0 | 0;
        var$6$hi = i64toi32_i32$3;
        var$7 = var$6;
        var$7$hi = i64toi32_i32$3;
        var$2 = var$2 + -1 | 0;
        if (var$2) {
         continue label$15
        }
        break label$15;
       };
       break label$13;
      }
     }
    }
    i64toi32_i32$3 = var$5$hi;
    __wasm_intrinsics_temp_i64 = var$5;
    __wasm_intrinsics_temp_i64$hi = i64toi32_i32$3;
    i64toi32_i32$3 = var$0$hi;
    i64toi32_i32$5 = var$0;
    i64toi32_i32$2 = 0;
    i64toi32_i32$0 = 1;
    i64toi32_i32$4 = i64toi32_i32$0 & 31 | 0;
    if (32 >>> 0 <= (i64toi32_i32$0 & 63 | 0) >>> 0) {
     i64toi32_i32$2 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
     $51 = 0;
    } else {
     i64toi32_i32$2 = ((1 << i64toi32_i32$4 | 0) - 1 | 0) & (i64toi32_i32$5 >>> (32 - i64toi32_i32$4 | 0) | 0) | 0 | (i64toi32_i32$3 << i64toi32_i32$4 | 0) | 0;
     $51 = i64toi32_i32$5 << i64toi32_i32$4 | 0;
    }
    $165$hi = i64toi32_i32$2;
    i64toi32_i32$2 = var$6$hi;
    i64toi32_i32$2 = $165$hi;
    i64toi32_i32$3 = $51;
    i64toi32_i32$5 = var$6$hi;
    i64toi32_i32$0 = var$6;
    i64toi32_i32$5 = i64toi32_i32$2 | i64toi32_i32$5 | 0;
    i64toi32_i32$3 = i64toi32_i32$3 | i64toi32_i32$0 | 0;
    i64toi32_i32$HIGH_BITS = i64toi32_i32$5;
    return i64toi32_i32$3 | 0;
   }
   i64toi32_i32$3 = var$0$hi;
   __wasm_intrinsics_temp_i64 = var$0;
   __wasm_intrinsics_temp_i64$hi = i64toi32_i32$3;
   i64toi32_i32$3 = 0;
   var$0 = 0;
   var$0$hi = i64toi32_i32$3;
  }
  i64toi32_i32$3 = var$0$hi;
  i64toi32_i32$5 = var$0;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$3;
  return i64toi32_i32$5 | 0;
 }
 
 function __wasm_ctz_i32(var$0) {
  var$0 = var$0 | 0;
  if (var$0) {
   return 31 - Math_clz32((var$0 + -1 | 0) ^ var$0 | 0) | 0 | 0
  }
  return 32 | 0;
 }
 
 function __wasm_i64_mul(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = _ZN17compiler_builtins3int3mul3Mul3mul17h070e9a1c69faec5bE(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 function __wasm_i64_udiv(var$0, var$0$hi, var$1, var$1$hi) {
  var$0 = var$0 | 0;
  var$0$hi = var$0$hi | 0;
  var$1 = var$1 | 0;
  var$1$hi = var$1$hi | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$0 = var$1$hi;
  i64toi32_i32$0 = var$0$hi;
  i64toi32_i32$1 = var$1$hi;
  i64toi32_i32$1 = _ZN17compiler_builtins3int4udiv10divmod_u6417h6026910b5ed08e40E(var$0 | 0, i64toi32_i32$0 | 0, var$1 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  i64toi32_i32$HIGH_BITS = i64toi32_i32$0;
  return i64toi32_i32$1 | 0;
 }
 
 bufferView = HEAPU8;
 initActiveSegments(env);
 $start();
 function __wasm_memory_size() {
  return buffer.byteLength / 65536 | 0;
 }
 
 function __wasm_memory_grow(pagesToAdd) {
  pagesToAdd = pagesToAdd | 0;
  var oldPages = __wasm_memory_size() | 0;
  var newPages = oldPages + pagesToAdd | 0;
  if ((oldPages < newPages) && (newPages < 65536)) {
   var newBuffer = new ArrayBuffer(Math_imul(newPages, 65536));
   var newHEAP8 = new Int8Array(newBuffer);
   newHEAP8.set(HEAP8);
   HEAP8 = new Int8Array(newBuffer);
   HEAP16 = new Int16Array(newBuffer);
   HEAP32 = new Int32Array(newBuffer);
   HEAPU8 = new Uint8Array(newBuffer);
   HEAPU16 = new Uint16Array(newBuffer);
   HEAPU32 = new Uint32Array(newBuffer);
   HEAPF32 = new Float32Array(newBuffer);
   HEAPF64 = new Float64Array(newBuffer);
   buffer = newBuffer;
   memory.buffer = buffer;
   bufferView = HEAPU8;
  }
  return oldPages;
 }
 
 return {
  "add": assembly_as_add, 
  "callback": assembly_as_callback, 
  "mem": assembly_as_mem, 
  "factorial": assembly_as_factorial, 
  "__new": $lib_rt_itcms___new, 
  "__pin": $lib_rt_itcms___pin, 
  "__unpin": $lib_rt_itcms___unpin, 
  "__collect": $lib_rt_itcms___collect, 
  "__rtti_base": $lib_rt___rtti_base, 
  "memory": Object.create(Object.prototype, {
   "grow": {
    "value": __wasm_memory_grow
   }, 
   "buffer": {
    "get": function () {
     return buffer;
    }
    
   }
  }), 
  "str": export_assembly_as_str, 
  "sum": export_assembly_as_sum
 };
}

var memasmFunc = new ArrayBuffer(65536);
var retasmFunc = asmFunc(  { abort: function() { throw new Error('abort'); },
    abort,
    log,
    memory: { buffer : memasmFunc }
  });
export var add = retasmFunc.add;
export var callback = retasmFunc.callback;
export var mem = retasmFunc.mem;
export var factorial = retasmFunc.factorial;
export var __new = retasmFunc.__new;
export var __pin = retasmFunc.__pin;
export var __unpin = retasmFunc.__unpin;
export var __collect = retasmFunc.__collect;
export var memory = retasmFunc.memory;
export var str = retasmFunc.str;
export var sum = retasmFunc.sum;
