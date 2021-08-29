import { fd_write } from 'wasi_snapshot_preview1';
import { proc_exit } from 'wasi_snapshot_preview1';
import { environ_sizes_get } from 'wasi_snapshot_preview1';
import { environ_get } from 'wasi_snapshot_preview1';
import { path_open } from 'wasi_snapshot_preview1';

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
  base64DecodeToExistingUint8Array(bufferView, 12, "HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 44, "PAAAAAAAAAAAAAAAAQAAACQAAABVAG4AcABhAGkAcgBlAGQAIABzAHUAcgByAG8AZwBhAHQAZQAAAAAAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 108, "LAAAAAAAAAAAAAAAAQAAABwAAAB+AGwAaQBiAC8AcwB0AHIAaQBuAGcALgB0AHMA");
  base64DecodeToExistingUint8Array(bufferView, 156, "PAAAAAAAAAAAAAAAAQAAACgAAABBAGwAbABvAGMAYQB0AGkAbwBuACAAdABvAG8AIABsAGEAcgBnAGUAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 220, "PAAAAAAAAAAAAAAAAQAAACAAAAB+AGwAaQBiAC8AcgB0AC8AaQB0AGMAbQBzAC4AdABzAAAAAAAAAAAAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 288, "AAAAAAAAAAAAAAAAAAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 320, "AAAAAAAAAAAAAAAAAAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 348, "PAAAAAAAAAAAAAAAAQAAACQAAABJAG4AZABlAHgAIABvAHUAdAAgAG8AZgAgAHIAYQBuAGcAZQAAAAAAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 412, "LAAAAAAAAAAAAAAAAQAAABQAAAB+AGwAaQBiAC8AcgB0AC4AdABzAAAAAAAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 464, "AAAAAAAAAAAAAAAAAAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 492, "PAAAAAAAAAAAAAAAAQAAAB4AAAB+AGwAaQBiAC8AcgB0AC8AdABsAHMAZgAuAHQAcwAAAAAAAAAAAAAAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 560, "AAAAAAAAAAAAAAAAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 588, "LAAAAAAAAAAAAAAAAQAAABwAAABJAG4AdgBhAGwAaQBkACAAbABlAG4AZwB0AGgA");
  base64DecodeToExistingUint8Array(bufferView, 636, "PAAAAAAAAAAAAAAAAQAAACYAAAB+AGwAaQBiAC8AYQByAHIAYQB5AGIAdQBmAGYAZQByAC4AdABzAAAAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 700, "HAAAAAAAAAAAAAAAAQAAAAIAAAA9AAAAAAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 732, "HAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 764, "LAAAAAAAAAAAAAAAAQAAABoAAAB+AGwAaQBiAC8AYQByAHIAYQB5AC4AdABzAAAA");
  base64DecodeToExistingUint8Array(bufferView, 812, "HAAAAAAAAAAAAAAAAQAAAAgAAABIAE8ATQBFAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 844, "PAAAAAAAAAAAAAAAAQAAAB4AAAB1AG4AZQB4AHAAZQBjAHQAZQBkACAAbgB1AGwAbAAAAAAAAAAAAAAAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 908, "PAAAAAAAAAAAAAAAAQAAACAAAABhAHMAcwBlAG0AYgBsAHkALwB3AGEAcwBpAC4AdABzAAAAAAAAAAAAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 972, "PAAAAAAAAAAAAAAAAQAAACQAAAB3AGEAcwBtACAAbQBvAGQAdQBsAGUAIABpAG4AaQB0ADoAIAAAAAAAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 1040, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 1072, "AAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 1088, "AAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 1104, "AAAAAAAAAAAAAAAAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 1120, "AAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 1132, "LAAAAAAAAAAAAAAAAQAAABwAAABoAGUAbABsAG8AdwBvAHIAbABkAC4AdAB4AHQA");
  base64DecodeToExistingUint8Array(bufferView, 1180, "HAAAAAAAAAAAAAAAAQAAAAQAAAB3ACsAAAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 1212, "HAAAAAAAAAAAAAAAAQAAAAIAAAByAAAAAAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 1244, "HAAAAAAAAAAAAAAAAQAAAAQAAAByACsAAAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 1276, "HAAAAAAAAAAAAAAAAQAAAAIAAAB3AAAAAAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 1308, "HAAAAAAAAAAAAAAAAQAAAAQAAAB3AHgAAAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 1340, "HAAAAAAAAAAAAAAAAQAAAAYAAAB4AHcAKwAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 1376, "AAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 1388, "TAAAAAAAAAAAAAAAAQAAADAAAABDAG8AdQBsAGQAIABuAG8AdAAgAG8AcABlAG4AIAB0AGgAZQAgAGYAaQBsAGUAIAAAAAAAAAAAAAAAAAA=");
  base64DecodeToExistingUint8Array(bufferView, 1468, "LAAAAAAAAAAAAAAAAQAAABgAAABIAGUAbABsAG8AIABXAG8AcgBsAGQAIQAAAAAA");
  base64DecodeToExistingUint8Array(bufferView, 1516, "PAAAAAAAAAAAAAAAAQAAACoAAABPAGIAagBlAGMAdAAgAGEAbAByAGUAYQBkAHkAIABwAGkAbgBuAGUAZAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 1580, "PAAAAAAAAAAAAAAAAQAAACgAAABPAGIAagBlAGMAdAAgAGkAcwAgAG4AbwB0ACAAcABpAG4AbgBlAGQAAAAAAA==");
  base64DecodeToExistingUint8Array(bufferView, 1648, "BwAAACAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQQAAAAAAAAIJAAAAAAAA");
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
 var $lib_bindings_wasi_snapshot_preview1_fd_write = env.fd_write;
 var $lib_bindings_wasi_snapshot_preview1_proc_exit = env.proc_exit;
 var $lib_bindings_wasi_snapshot_preview1_environ_sizes_get = env.environ_sizes_get;
 var $lib_bindings_wasi_snapshot_preview1_environ_get = env.environ_get;
 var legalimport$_lib_bindings_wasi_snapshot_preview1_path_open = env.path_open;
 var $lib_as_wasi_as_wasi_Time_NANOSECOND = 1;
 var $lib_as_wasi_as_wasi_Time_MILLISECOND = 0;
 var $lib_as_wasi_as_wasi_Time_SECOND = 0;
 var $argumentsLength = 0;
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
 var $lib_builtins_i32_MAX_VALUE = 2147483647;
 var $lib_rt___rtti_base = 1648;
 var $lib_memory___data_end = 1708;
 var $lib_memory___stack_pointer = 18092;
 var $lib_memory___heap_base = 18092;
 var $started = 0;
 var __wasm_intrinsics_temp_i64 = 0;
 var __wasm_intrinsics_temp_i64$hi = 0;
 var i64toi32_i32$HIGH_BITS = 0;
 function start__lib_as_wasi_as_wasi() {
  $lib_as_wasi_as_wasi_Time_MILLISECOND = Math_imul($lib_as_wasi_as_wasi_Time_NANOSECOND, 1e6);
  $lib_as_wasi_as_wasi_Time_SECOND = Math_imul($lib_as_wasi_as_wasi_Time_MILLISECOND, 1e3);
 }
 
 function start__lib_as_wasi_index() {
  start__lib_as_wasi_as_wasi();
 }
 
 function $lib_bindings_wasi_snapshot_preview1_iovec_set_buf($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[$0 >> 2] = $1;
 }
 
 function $lib_string_String_get_length($0) {
  $0 = $0 | 0;
  return (HEAP32[(($0 - 20 | 0) + 16 | 0) >> 2] | 0) >>> 1 | 0 | 0;
 }
 
 function $lib_string_String_UTF8_encodeUnsafe($0, $1, $2, $3, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  var $6 = 0, $8 = 0, $10 = 0, $7 = 0, $9 = 0, $12 = 0, $13 = 0, $5 = 0, $55 = 0;
  $5 = $0 + ($1 << 1 | 0) | 0;
  $6 = $2;
  while_continue_0 : while (1) {
   $7 = $0 >>> 0 < $5 >>> 0;
   if ($7) {
    $8 = HEAPU16[$0 >> 1] | 0;
    if ($8 >>> 0 < 128 >>> 0) {
     HEAP8[$6 >> 0] = $8;
     $6 = $6 + 1 | 0;
    } else {
     if ($8 >>> 0 < 2048 >>> 0) {
      $9 = $8 >>> 6 | 0 | 192 | 0;
      $10 = $8 & 63 | 0 | 128 | 0;
      HEAP16[$6 >> 1] = $10 << 8 | 0 | $9 | 0;
      $6 = $6 + 2 | 0;
     } else {
      if (($8 & 63488 | 0 | 0) == (55296 | 0)) {
       if ($8 >>> 0 < 56320 >>> 0) {
        $55 = ($0 + 2 | 0) >>> 0 < $5 >>> 0
       } else {
        $55 = 0
       }
       if ($55) {
        $10 = HEAPU16[($0 + 2 | 0) >> 1] | 0;
        if (($10 & 64512 | 0 | 0) == (56320 | 0)) {
         $8 = 65536 + (($8 & 1023 | 0) << 10 | 0) | 0 | ($10 & 1023 | 0) | 0;
         $9 = $8 >>> 18 | 0 | 240 | 0;
         $12 = ($8 >>> 6 | 0) & 63 | 0 | 128 | 0;
         $13 = $8 & 63 | 0 | 128 | 0;
         HEAP32[$6 >> 2] = $13 << 24 | 0 | ($12 << 16 | 0) | 0 | ((($8 >>> 12 | 0) & 63 | 0 | 128 | 0) << 8 | 0) | 0 | $9 | 0;
         $6 = $6 + 4 | 0;
         $0 = $0 + 4 | 0;
         continue while_continue_0;
        }
       }
       if (($4 | 0) != (0 | 0)) {
        if (($4 | 0) == (2 | 0)) {
         $lib_wasi_index_abort(64 | 0, 128 | 0, 739 | 0, 49 | 0);
         abort();
        }
        $8 = 65533;
       }
      }
      $10 = $8 >>> 12 | 0 | 224 | 0;
      $13 = ($8 >>> 6 | 0) & 63 | 0 | 128 | 0;
      $12 = $8 & 63 | 0 | 128 | 0;
      HEAP16[$6 >> 1] = $13 << 8 | 0 | $10 | 0;
      HEAP8[($6 + 2 | 0) >> 0] = $12;
      $6 = $6 + 3 | 0;
     }
    }
    $0 = $0 + 2 | 0;
    continue while_continue_0;
   }
   break while_continue_0;
  };
  if ($3) {
   $7 = $6;
   $6 = $6 + 1 | 0;
   HEAP8[$7 >> 0] = 0;
  }
  return $6 - $2 | 0 | 0;
 }
 
 function $lib_string_String_UTF8_encodeUnsafe_varargs($0, $1, $2, $3, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  $2of2 : {
   switch ($argumentsLength - 3 | 0 | 0) {
   default:
    abort();
   case 0:
    $3 = 0;
   case 1:
    $4 = 0;
    break;
   case 2:
    break $2of2;
   };
  }
  return $lib_string_String_UTF8_encodeUnsafe($0 | 0, $1 | 0, $2 | 0, $3 | 0, $4 | 0) | 0 | 0;
 }
 
 function $lib_util_number_decimalCount32($0) {
  $0 = $0 | 0;
  if ($0 >>> 0 < 1e5 >>> 0) {
   if ($0 >>> 0 < 100 >>> 0) {
    return 1 + ($0 >>> 0 >= 10 >>> 0) | 0 | 0
   } else {
    return (3 + ($0 >>> 0 >= 1e4 >>> 0) | 0) + ($0 >>> 0 >= 1e3 >>> 0) | 0 | 0
   }
  } else {
   if ($0 >>> 0 < 1e7 >>> 0) {
    return 6 + ($0 >>> 0 >= 1e6 >>> 0) | 0 | 0
   } else {
    return (8 + ($0 >>> 0 >= 1e9 >>> 0) | 0) + ($0 >>> 0 >= 1e8 >>> 0) | 0 | 0
   }
  }
 }
 
 function $lib_bindings_wasi_snapshot_preview1_iovec_set_buf_len($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[($0 + 4 | 0) >> 2] = $1;
 }
 
 function $lib_wasi_index_abort($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var $4 = 0, $6 = 0, $7 = 0, $5 = 0, $17 = 0, $31 = 0;
  $lib_bindings_wasi_snapshot_preview1_iovec_set_buf(0 | 0, 12 | 0);
  $4 = 12;
  HEAP32[$4 >> 2] = 1919902305;
  HEAP32[($4 + 4 | 0) >> 2] = 2112116;
  $4 = $4 + 7 | 0;
  if (($0 | 0) != (0 | 0)) {
   $17 = $lib_string_String_get_length($0 | 0) | 0;
   $argumentsLength = 3;
   $4 = $4 + ($lib_string_String_UTF8_encodeUnsafe_varargs($0 | 0, $17 | 0, $4 | 0, 0 | 0, 0 | 0) | 0) | 0;
  }
  HEAP32[$4 >> 2] = 544106784;
  $4 = $4 + 4 | 0;
  if (($1 | 0) != (0 | 0)) {
   $31 = $lib_string_String_get_length($1 | 0) | 0;
   $argumentsLength = 3;
   $4 = $4 + ($lib_string_String_UTF8_encodeUnsafe_varargs($1 | 0, $31 | 0, $4 | 0, 0 | 0, 0 | 0) | 0) | 0;
  }
  $5 = $4;
  $4 = $4 + 1 | 0;
  HEAP8[$5 >> 0] = 40;
  $6 = $lib_util_number_decimalCount32($2 | 0) | 0;
  $4 = $4 + $6 | 0;
  do_continue_0 : while (1) {
   $5 = ($2 >>> 0) / (10 >>> 0) | 0;
   $4 = $4 - 1 | 0;
   HEAP8[$4 >> 0] = 48 + (($2 >>> 0) % (10 >>> 0) | 0) | 0;
   $2 = $5;
   $7 = $2;
   if ($2) {
    continue do_continue_0
   }
   break do_continue_0;
  };
  $4 = $4 + $6 | 0;
  $7 = $4;
  $4 = $4 + 1 | 0;
  HEAP8[$7 >> 0] = 58;
  $6 = $lib_util_number_decimalCount32($3 | 0) | 0;
  $4 = $4 + $6 | 0;
  do_continue_1 : while (1) {
   $7 = ($3 >>> 0) / (10 >>> 0) | 0;
   $4 = $4 - 1 | 0;
   HEAP8[$4 >> 0] = 48 + (($3 >>> 0) % (10 >>> 0) | 0) | 0;
   $3 = $7;
   if ($3) {
    continue do_continue_1
   }
   break do_continue_1;
  };
  $4 = $4 + $6 | 0;
  HEAP16[$4 >> 1] = 2601;
  $4 = $4 + 2 | 0;
  $lib_bindings_wasi_snapshot_preview1_iovec_set_buf_len(0 | 0, $4 - 12 | 0 | 0);
  $lib_bindings_wasi_snapshot_preview1_fd_write(2 | 0, 0 | 0, 1 | 0, 8 | 0) | 0;
  $lib_bindings_wasi_snapshot_preview1_proc_exit(255 | 0);
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
     $lib_wasi_index_abort(0 | 0, 240 | 0, 159 | 0, 16 | 0);
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
    $lib_wasi_index_abort(0 | 0, 240 | 0, 127 | 0, 18 | 0);
    abort();
   }
   return;
  }
  $2 = HEAP32[($0 + 8 | 0) >> 2] | 0;
  if (!$2) {
   $lib_wasi_index_abort(0 | 0, 240 | 0, 131 | 0, 16 | 0);
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
   $lib_wasi_index_abort(368 | 0, 432 | 0, 22 | 0, 28 | 0);
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
    $lib_wasi_index_abort(0 | 0, 240 | 0, 147 | 0, 30 | 0);
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
   $lib_wasi_index_abort(0 | 0, 512 | 0, 268 | 0, 14 | 0);
   abort();
  }
  $3 = $2 & (3 ^ -1 | 0) | 0;
  if (!($3 >>> 0 >= 12 >>> 0)) {
   $lib_wasi_index_abort(0 | 0, 512 | 0, 270 | 0, 14 | 0);
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
   $lib_wasi_index_abort(0 | 0, 512 | 0, 284 | 0, 14 | 0);
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
   $lib_wasi_index_abort(0 | 0, 512 | 0, 201 | 0, 14 | 0);
   abort();
  }
  $2 = HEAP32[$1 >> 2] | 0;
  if (!($2 & 1 | 0)) {
   $lib_wasi_index_abort(0 | 0, 512 | 0, 203 | 0, 14 | 0);
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
    $lib_wasi_index_abort(0 | 0, 512 | 0, 221 | 0, 16 | 0);
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
   $lib_wasi_index_abort(0 | 0, 512 | 0, 233 | 0, 14 | 0);
   abort();
  }
  if (!((($1 + 4 | 0) + $7 | 0 | 0) == ($4 | 0))) {
   $lib_wasi_index_abort(0 | 0, 512 | 0, 234 | 0, 14 | 0);
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
   $lib_wasi_index_abort(0 | 0, 512 | 0, 251 | 0, 14 | 0);
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
   $lib_wasi_index_abort(0 | 0, 512 | 0, 377 | 0, 14 | 0);
   abort();
  }
  $1 = ((($1 + 4 | 0) + 15 | 0) & (15 ^ -1 | 0) | 0) - 4 | 0;
  $2 = $2 & (15 ^ -1 | 0) | 0;
  $4 = HEAP32[($0 + 1568 | 0) >> 2] | 0;
  $5 = 0;
  if ($4) {
   if (!($1 >>> 0 >= ($4 + 4 | 0) >>> 0)) {
    $lib_wasi_index_abort(0 | 0, 512 | 0, 384 | 0, 16 | 0);
    abort();
   }
   if (($1 - 16 | 0 | 0) == ($4 | 0)) {
    $1 = $1 - 16 | 0;
    $5 = HEAP32[$4 >> 2] | 0;
   }
  } else {
   if (!($1 >>> 0 >= ($0 + 1572 | 0) >>> 0)) {
    $lib_wasi_index_abort(0 | 0, 512 | 0, 397 | 0, 5 | 0);
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
   $lib_wasi_index_abort(0 | 0, 512 | 0, 559 | 0, 3 | 0);
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
     $lib_wasi_index_abort(0 | 0, 240 | 0, 228 | 0, 20 | 0);
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
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $0 = 0, $3 = 0;
  $0 = (Math_imul(1024, 200) >>> 0) / (100 >>> 0) | 0;
  do_continue_0 : while (1) {
   $0 = $0 - ($lib_rt_itcms_step() | 0) | 0;
   if (($lib_rt_itcms_state | 0) == (0 | 0)) {
    i64toi32_i32$0 = 0;
    i64toi32_i32$1 = 0;
    i64toi32_i32$1 = __wasm_i64_mul($lib_rt_itcms_total | 0, i64toi32_i32$0 | 0, 200 | 0, i64toi32_i32$1 | 0) | 0;
    i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
    $3 = i64toi32_i32$1;
    i64toi32_i32$1 = 0;
    i64toi32_i32$1 = __wasm_i64_udiv($3 | 0, i64toi32_i32$0 | 0, 100 | 0, i64toi32_i32$1 | 0) | 0;
    i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
    $lib_rt_itcms_threshold = i64toi32_i32$1 + 1024 | 0;
    return;
   }
   if (($0 | 0) > (0 | 0)) {
    continue do_continue_0
   }
   break do_continue_0;
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
   $lib_wasi_index_abort(176 | 0, 512 | 0, 458 | 0, 29 | 0);
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
   $lib_wasi_index_abort(0 | 0, 512 | 0, 330 | 0, 14 | 0);
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
     $lib_wasi_index_abort(0 | 0, 512 | 0, 343 | 0, 18 | 0);
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
   $lib_wasi_index_abort(0 | 0, 512 | 0, 357 | 0, 14 | 0);
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
    $lib_wasi_index_abort(0 | 0, 512 | 0, 496 | 0, 16 | 0);
    abort();
   }
  }
  if (!(((HEAP32[$3 >> 2] | 0) & (3 ^ -1 | 0) | 0) >>> 0 >= $2 >>> 0)) {
   $lib_wasi_index_abort(0 | 0, 512 | 0, 498 | 0, 14 | 0);
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
   $lib_wasi_index_abort(176 | 0, 240 | 0, 260 | 0, 31 | 0);
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
 
 function $lib_rt___newBuffer($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0;
  $3 = $lib_rt_itcms___new($0 | 0, $1 | 0) | 0;
  if ($2) {
   wasm2js_memory_copy($3, $2, $0)
  }
  return $3 | 0;
 }
 
 function $lib_rt_itcms___link($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $4 = 0, $5 = 0, $31 = 0;
  if (!$1) {
   return
  }
  if (!$0) {
   $lib_wasi_index_abort(0 | 0, 240 | 0, 294 | 0, 14 | 0);
   abort();
  }
  $3 = $1 - 20 | 0;
  if (($lib_rt_itcms_Object_get_color($3 | 0) | 0 | 0) == ($lib_rt_itcms_white | 0)) {
   $4 = $0 - 20 | 0;
   $5 = $lib_rt_itcms_Object_get_color($4 | 0) | 0;
   if (($5 | 0) == (!$lib_rt_itcms_white | 0)) {
    if ($2) {
     $lib_rt_itcms_Object_makeGray($4 | 0)
    } else {
     $lib_rt_itcms_Object_makeGray($3 | 0)
    }
   } else {
    if (($5 | 0) == (3 | 0)) {
     $31 = ($lib_rt_itcms_state | 0) == (1 | 0)
    } else {
     $31 = 0
    }
    if ($31) {
     $lib_rt_itcms_Object_makeGray($3 | 0)
    }
   }
  }
 }
 
 function $lib_as_wasi_as_wasi_Environ_set_env($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[$0 >> 2] = $1;
  $lib_rt_itcms___link($0 | 0, $1 | 0, 0 | 0);
 }
 
 function $lib_rt_itcms___renew($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $3 = 0, $5 = 0;
  $2 = $0 - 20 | 0;
  if ($1 >>> 0 <= (((HEAP32[$2 >> 2] | 0) & (3 ^ -1 | 0) | 0) - 16 | 0) >>> 0) {
   $lib_rt_itcms_Object_set_rtSize($2 | 0, $1 | 0);
   return $0 | 0;
  }
  $3 = $lib_rt_itcms___new($1 | 0, HEAP32[($2 + 12 | 0) >> 2] | 0 | 0) | 0;
  $5 = HEAP32[($2 + 16 | 0) >> 2] | 0;
  wasm2js_memory_copy($3, $0, $1 >>> 0 < $5 >>> 0 ? $1 : $5);
  return $3 | 0;
 }
 
 function $lib_util_string_compareImpl($0, $1, $2, $3, $4) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  var $5 = 0, $6 = 0, i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, $7 = 0, $27 = 0, $8 = 0, $9 = 0, $30 = 0, $30$hi = 0, $32 = 0, $32$hi = 0;
  $5 = $0 + ($1 << 1 | 0) | 0;
  $6 = $2 + ($3 << 1 | 0) | 0;
  if ($4 >>> 0 >= 4 >>> 0) {
   $27 = !($5 & 7 | 0 | ($6 & 7 | 0) | 0)
  } else {
   $27 = 0
  }
  if ($27) {
   do_break_0 : {
    do_continue_0 : while (1) {
     i64toi32_i32$0 = HEAP32[$5 >> 2] | 0;
     i64toi32_i32$1 = HEAP32[($5 + 4 | 0) >> 2] | 0;
     $30 = i64toi32_i32$0;
     $30$hi = i64toi32_i32$1;
     i64toi32_i32$1 = HEAP32[$6 >> 2] | 0;
     i64toi32_i32$0 = HEAP32[($6 + 4 | 0) >> 2] | 0;
     $32 = i64toi32_i32$1;
     $32$hi = i64toi32_i32$0;
     i64toi32_i32$0 = $30$hi;
     i64toi32_i32$1 = $32$hi;
     if (($30 | 0) != ($32 | 0) | (i64toi32_i32$0 | 0) != (i64toi32_i32$1 | 0) | 0) {
      break do_break_0
     }
     $5 = $5 + 8 | 0;
     $6 = $6 + 8 | 0;
     $4 = $4 - 4 | 0;
     $7 = $4 >>> 0 >= 4 >>> 0;
     if ($7) {
      continue do_continue_0
     }
     break do_continue_0;
    };
   }
  }
  while_continue_1 : while (1) {
   $7 = $4;
   $4 = $4 - 1 | 0;
   if ($7) {
    $8 = HEAPU16[$5 >> 1] | 0;
    $9 = HEAPU16[$6 >> 1] | 0;
    if (($8 | 0) != ($9 | 0)) {
     return $8 - $9 | 0 | 0
    }
    $5 = $5 + 2 | 0;
    $6 = $6 + 2 | 0;
    continue while_continue_1;
   }
   break while_continue_1;
  };
  return 0 | 0;
 }
 
 function $lib_string_String_indexOf($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $4 = 0, $6 = 0, $7 = 0, $3 = 0, $5 = 0;
  $3 = $lib_string_String_get_length($1 | 0) | 0;
  if (!$3) {
   return 0 | 0
  }
  $4 = $lib_string_String_get_length($0 | 0) | 0;
  if (!$4) {
   return -1 | 0
  }
  $5 = $2;
  $6 = 0;
  $6 = ($5 | 0) > ($6 | 0) ? $5 : $6;
  $5 = $4;
  $7 = ($6 | 0) < ($4 | 0) ? $6 : $4;
  $4 = $4 - $3 | 0;
  for_loop_0 : while (1) {
   $6 = ($7 | 0) <= ($4 | 0);
   if ($6) {
    if (!($lib_util_string_compareImpl($0 | 0, $7 | 0, $1 | 0, 0 | 0, $3 | 0) | 0)) {
     return $7 | 0
    }
    $7 = $7 + 1 | 0;
    continue for_loop_0;
   }
   break for_loop_0;
  };
  return -1 | 0;
 }
 
 function $lib_as_wasi_as_wasi_EnvironEntry_set_key($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[$0 >> 2] = $1;
  $lib_rt_itcms___link($0 | 0, $1 | 0, 0 | 0);
 }
 
 function $lib_as_wasi_as_wasi_EnvironEntry_set_value($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[($0 + 4 | 0) >> 2] = $1;
  $lib_rt_itcms___link($0 | 0, $1 | 0, 0 | 0);
 }
 
 function $lib_array_ensureCapacity($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var $8 = 0, $6 = 0, $7 = 0, $4 = 0, $5 = 0;
  $4 = HEAP32[($0 + 8 | 0) >> 2] | 0;
  if ($1 >>> 0 > ($4 >>> $2 | 0) >>> 0) {
   if ($1 >>> 0 > (1073741820 >>> $2 | 0) >>> 0) {
    $lib_wasi_index_abort(608 | 0, 784 | 0, 17 | 0, 48 | 0);
    abort();
   }
   $5 = HEAP32[$0 >> 2] | 0;
   $6 = $1;
   $7 = 8;
   $6 = ($6 >>> 0 > $7 >>> 0 ? $6 : $7) << $2 | 0;
   if ($3) {
    $7 = $4 << 1 | 0;
    $8 = 1073741820;
    $8 = $7 >>> 0 < $8 >>> 0 ? $7 : $8;
    $7 = $6;
    $6 = $8 >>> 0 > $6 >>> 0 ? $8 : $6;
   }
   $8 = $lib_rt_itcms___renew($5 | 0, $6 | 0) | 0;
   wasm2js_memory_fill($8 + $4 | 0, 0, $6 - $4 | 0);
   if (($8 | 0) != ($5 | 0)) {
    HEAP32[$0 >> 2] = $8;
    HEAP32[($0 + 4 | 0) >> 2] = $8;
    $lib_rt_itcms___link($0 | 0, $8 | 0, 0 | 0);
   }
   HEAP32[($0 + 8 | 0) >> 2] = $6;
  }
 }
 
 function $lib_array_Array__lib_as_wasi_as_wasi_EnvironEntry__set_length_($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  HEAP32[($0 + 12 | 0) >> 2] = $1;
 }
 
 function $lib_array_Array__lib_as_wasi_as_wasi_EnvironEntry__push($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $3 = 0, $2 = 0;
  $2 = HEAP32[($0 + 12 | 0) >> 2] | 0;
  $3 = $2 + 1 | 0;
  $lib_array_ensureCapacity($0 | 0, $3 | 0, 2 | 0, 1 | 0);
  HEAP32[((HEAP32[($0 + 4 | 0) >> 2] | 0) + ($2 << 2 | 0) | 0) >> 2] = $1;
  $lib_rt_itcms___link($0 | 0, $1 | 0, 1 | 0);
  $lib_array_Array__lib_as_wasi_as_wasi_EnvironEntry__set_length_($0 | 0, $3 | 0);
  return $3 | 0;
 }
 
 function $lib_array_Array__lib_as_wasi_as_wasi_EnvironEntry__get_length($0) {
  $0 = $0 | 0;
  return HEAP32[($0 + 12 | 0) >> 2] | 0 | 0;
 }
 
 function $lib_array_Array__lib_as_wasi_as_wasi_EnvironEntry____uget($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return HEAP32[((HEAP32[($0 + 4 | 0) >> 2] | 0) + ($1 << 2 | 0) | 0) >> 2] | 0 | 0;
 }
 
 function $lib_string_String___eq($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $10 = 0, $2 = 0;
  if (($0 | 0) == ($1 | 0)) {
   return 1 | 0
  }
  if (($0 | 0) == (0 | 0)) {
   $10 = 1
  } else {
   $10 = ($1 | 0) == (0 | 0)
  }
  if ($10) {
   return 0 | 0
  }
  $2 = $lib_string_String_get_length($0 | 0) | 0;
  if (($2 | 0) != ($lib_string_String_get_length($1 | 0) | 0 | 0)) {
   return 0 | 0
  }
  return !($lib_util_string_compareImpl($0 | 0, 0 | 0, $1 | 0, 0 | 0, $2 | 0) | 0) | 0;
 }
 
 function $lib_as_wasi_as_wasi_Descriptor_constructor($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return $1 | 0;
 }
 
 function $lib_string_String_UTF8_byteLength($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $4 = 0, $6 = 0, $3 = 0, $40 = 0;
  $2 = $0;
  $3 = $2 + (HEAP32[(($2 - 20 | 0) + 16 | 0) >> 2] | 0) | 0;
  $4 = ($1 | 0) != (0 | 0);
  while_break_0 : {
   while_continue_0 : while (1) {
    if ($2 >>> 0 < $3 >>> 0) {
     $6 = HEAPU16[$2 >> 1] | 0;
     if ($6 >>> 0 < 128 >>> 0) {
      if ($1 & !$6 | 0) {
       break while_break_0
      }
      $4 = $4 + 1 | 0;
     } else {
      if ($6 >>> 0 < 2048 >>> 0) {
       $4 = $4 + 2 | 0
      } else {
       if (($6 & 64512 | 0 | 0) == (55296 | 0)) {
        $40 = ($2 + 2 | 0) >>> 0 < $3 >>> 0
       } else {
        $40 = 0
       }
       if ($40) {
        if (((HEAPU16[($2 + 2 | 0) >> 1] | 0) & 64512 | 0 | 0) == (56320 | 0)) {
         $4 = $4 + 4 | 0;
         $2 = $2 + 4 | 0;
         continue while_continue_0;
        }
       }
       $4 = $4 + 3 | 0;
      }
     }
     $2 = $2 + 2 | 0;
     continue while_continue_0;
    }
    break while_continue_0;
   };
  }
  return $4 | 0;
 }
 
 function $lib_string_String_UTF8_encode_varargs($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $2of2 : {
   switch ($argumentsLength - 1 | 0 | 0) {
   default:
    abort();
   case 0:
    $1 = 0;
   case 1:
    $2 = 0;
    break;
   case 2:
    break $2of2;
   };
  }
  return $lib_string_String_UTF8_encode($0 | 0, $1 | 0, $2 | 0) | 0 | 0;
 }
 
 function $lib_arraybuffer_ArrayBuffer_get_byteLength($0) {
  $0 = $0 | 0;
  return HEAP32[(($0 - 20 | 0) + 16 | 0) >> 2] | 0 | 0;
 }
 
 function $lib_as_wasi_as_wasi_Descriptor_writeStringLn($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $4 = 0, $2 = 0, $5 = 0, $11 = 0, $3 = 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer - 4 | 0;
  $stack_check();
  HEAP32[$lib_memory___stack_pointer >> 2] = 0;
  $11 = $lib_memory___stack_pointer;
  $argumentsLength = 1;
  $2 = $lib_string_String_UTF8_encode_varargs($1 | 0, 0 | 0, 0 | 0) | 0;
  HEAP32[$11 >> 2] = $2;
  $3 = $lib_arraybuffer_ArrayBuffer_get_byteLength($2 | 0) | 0;
  $4 = 1040;
  HEAP32[$4 >> 2] = $2;
  HEAP32[($4 + 4 | 0) >> 2] = $3;
  $5 = 1072;
  HEAP8[$5 >> 0] = 10;
  HEAP32[($4 + 8 | 0) >> 2] = $5;
  HEAP32[($4 + 12 | 0) >> 2] = 1;
  $lib_bindings_wasi_snapshot_preview1_fd_write($0 | 0, $4 | 0, 2 | 0, 1088 | 0) | 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer + 4 | 0;
 }
 
 function $lib_as_wasi_as_wasi_Descriptor_writeString($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $5 = 0, $16 = 0, $4 = 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer - 4 | 0;
  $stack_check();
  HEAP32[$lib_memory___stack_pointer >> 2] = 0;
  if ($2) {
   $lib_as_wasi_as_wasi_Descriptor_writeStringLn($0 | 0, $1 | 0);
   $lib_memory___stack_pointer = $lib_memory___stack_pointer + 4 | 0;
   return;
  }
  $16 = $lib_memory___stack_pointer;
  $argumentsLength = 1;
  $3 = $lib_string_String_UTF8_encode_varargs($1 | 0, 0 | 0, 0 | 0) | 0;
  HEAP32[$16 >> 2] = $3;
  $4 = $lib_arraybuffer_ArrayBuffer_get_byteLength($3 | 0) | 0;
  $5 = 1104;
  HEAP32[$5 >> 2] = $3;
  HEAP32[($5 + 4 | 0) >> 2] = $4;
  $lib_bindings_wasi_snapshot_preview1_fd_write($0 | 0, $5 | 0, 1 | 0, 1120 | 0) | 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer + 4 | 0;
 }
 
 function $lib_as_wasi_as_wasi_Console_write($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $lib_as_wasi_as_wasi_Descriptor_writeString($lib_as_wasi_as_wasi_Descriptor_constructor(0 | 0, 1 | 0) | 0 | 0, $0 | 0, $1 | 0);
 }
 
 function $lib_as_wasi_as_wasi_Console_log($0) {
  $0 = $0 | 0;
  $lib_as_wasi_as_wasi_Console_write($0 | 0, 1 | 0);
 }
 
 function start_assembly_wasi() {
  start__lib_as_wasi_index();
  $lib_rt_itcms_threshold = ((__wasm_memory_size() << 16 | 0) - $lib_memory___heap_base | 0) >>> 1 | 0;
  $lib_rt_itcms_pinSpace = $lib_rt_itcms_initLazy(288 | 0) | 0;
  $lib_rt_itcms_toSpace = $lib_rt_itcms_initLazy(320 | 0) | 0;
  $lib_rt_itcms_fromSpace = $lib_rt_itcms_initLazy(464 | 0) | 0;
  assembly_wasi_start();
 }
 
 function assembly_wasi_add($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return $0 + $1 | 0 | 0;
 }
 
 function $lib_as_wasi_as_wasi_FileSystem_dirfdForPath($0) {
  $0 = $0 | 0;
  return 3 | 0;
 }
 
 function $lib_string_String___concat($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  return $lib_string_String_concat($0 | 0, $1 | 0) | 0 | 0;
 }
 
 function $lib_rt_itcms___pin($0) {
  $0 = $0 | 0;
  var $1 = 0;
  if ($0) {
   $1 = $0 - 20 | 0;
   if (($lib_rt_itcms_Object_get_color($1 | 0) | 0 | 0) == (3 | 0)) {
    $lib_wasi_index_abort(1536 | 0, 240 | 0, 337 | 0, 7 | 0);
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
   $lib_wasi_index_abort(1600 | 0, 240 | 0, 351 | 0, 5 | 0);
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
  var i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $0 = 0, $3 = 0;
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
  i64toi32_i32$1 = 0;
  i64toi32_i32$1 = __wasm_i64_mul($lib_rt_itcms_total | 0, i64toi32_i32$0 | 0, 200 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $3 = i64toi32_i32$1;
  i64toi32_i32$1 = 0;
  i64toi32_i32$1 = __wasm_i64_udiv($3 | 0, i64toi32_i32$0 | 0, 100 | 0, i64toi32_i32$1 | 0) | 0;
  i64toi32_i32$0 = i64toi32_i32$HIGH_BITS;
  $lib_rt_itcms_threshold = i64toi32_i32$1 + 1024 | 0;
 }
 
 function $lib_rt___visit_globals($0) {
  $0 = $0 | 0;
  $lib_rt_itcms___visit(368 | 0, $0 | 0);
  $lib_rt_itcms___visit(608 | 0, $0 | 0);
  $lib_rt_itcms___visit(176 | 0, $0 | 0);
  $lib_rt_itcms___visit(1536 | 0, $0 | 0);
  $lib_rt_itcms___visit(1600 | 0, $0 | 0);
  $lib_rt_itcms___visit(64 | 0, $0 | 0);
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
 
 function $lib_as_wasi_as_wasi_Environ_visit($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  $2 = HEAP32[$0 >> 2] | 0;
  if ($2) {
   $lib_rt_itcms___visit($2 | 0, $1 | 0)
  }
 }
 
 function $lib_as_wasi_as_wasi_EnvironEntry_visit($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0;
  $2 = HEAP32[$0 >> 2] | 0;
  if ($2) {
   $lib_rt_itcms___visit($2 | 0, $1 | 0)
  }
  $2 = HEAP32[($0 + 4 | 0) >> 2] | 0;
  if ($2) {
   $lib_rt_itcms___visit($2 | 0, $1 | 0)
  }
 }
 
 function $lib_array_Array__lib_as_wasi_as_wasi_EnvironEntry____visit($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $5 = 0, $3 = 0;
  $2 = HEAP32[($0 + 4 | 0) >> 2] | 0;
  $3 = $2 + ((HEAP32[($0 + 12 | 0) >> 2] | 0) << 2 | 0) | 0;
  while_continue_0 : while (1) {
   if ($2 >>> 0 < $3 >>> 0) {
    $5 = HEAP32[$2 >> 2] | 0;
    if ($5) {
     $lib_rt_itcms___visit($5 | 0, $1 | 0)
    }
    $2 = $2 + 4 | 0;
    continue while_continue_0;
   }
   break while_continue_0;
  };
  $lib_rt_itcms___visit(HEAP32[$0 >> 2] | 0 | 0, $1 | 0);
 }
 
 function $lib_array_Array__lib_as_wasi_as_wasi_EnvironEntry__visit($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $lib_array_Array__lib_as_wasi_as_wasi_EnvironEntry____visit($0 | 0, $1 | 0);
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
    $lib_as_wasi_as_wasi_Environ_visit($0 | 0, $1 | 0);
    return;
   case 4:
    $lib_as_wasi_as_wasi_EnvironEntry_visit($0 | 0, $1 | 0);
    return;
   case 5:
    $lib_array_Array__lib_as_wasi_as_wasi_EnvironEntry__visit($0 | 0, $1 | 0);
    return;
   case 6:
    $lib_array_Array_i32__visit($0 | 0, $1 | 0);
    return;
   default:
    break invalid;
   };
  }
  abort();
 }
 
 function $start() {
  if ($started) {
   return
  }
  $started = 1;
  start_assembly_wasi();
 }
 
 function $stack_check() {
  if (($lib_memory___stack_pointer | 0) < ($lib_memory___data_end | 0)) {
   $lib_wasi_index_abort(18112 | 0, 18160 | 0, 1 | 0, 1 | 0);
   abort();
  }
 }
 
 function $lib_as_wasi_as_wasi_Environ_constructor($0) {
  $0 = $0 | 0;
  var $13 = 0, $11 = 0, $10 = 0, $2 = 0, $7 = 0, $3 = 0, $5 = 0, $19 = 0, $4 = 0, $56 = 0, $85 = 0, $93 = 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer - 24 | 0;
  $stack_check();
  wasm2js_memory_fill($lib_memory___stack_pointer, 0, 24);
  if (!$0) {
   $19 = $lib_memory___stack_pointer;
   $0 = $lib_rt_itcms___new(4 | 0, 3 | 0) | 0;
   HEAP32[$19 >> 2] = $0;
  }
  $lib_as_wasi_as_wasi_Environ_set_env($0 | 0, 0 | 0);
  $lib_as_wasi_as_wasi_Environ_set_env($0 | 0, $lib_rt___newArray(0 | 0, 2 | 0, 5 | 0, 32 | 0) | 0 | 0);
  $2 = 560;
  if ((($lib_bindings_wasi_snapshot_preview1_environ_sizes_get($2 | 0, $2 + 4 | 0 | 0) | 0) & 65535 | 0 | 0) != (0 | 0)) {
   $lib_wasi_index_abort(0 | 0, 0 | 0, 0 | 0, 0 | 0)
  }
  $3 = HEAP32[$2 >> 2] | 0;
  $4 = HEAP32[($2 + 4 | 0) >> 2] | 0;
  $5 = $lib_arraybuffer_ArrayBuffer_constructor(0 | 0, Math_imul($3 + 1 | 0, 4) | 0) | 0;
  if ((($lib_bindings_wasi_snapshot_preview1_environ_get($5 | 0, $lib_arraybuffer_ArrayBuffer_constructor(0 | 0, $4 | 0) | 0 | 0) | 0) & 65535 | 0 | 0) != (0 | 0)) {
   $lib_wasi_index_abort(0 | 0, 0 | 0, 0 | 0, 0 | 0)
  }
  $7 = 0;
  for_loop_0 : while (1) {
   if ($7 >>> 0 < $3 >>> 0) {
    for_continue_0 : {
     $56 = $lib_memory___stack_pointer;
     $lib_as_wasi_as_wasi_StringUtils_fromCString_inlined_0 : {
      $10 = HEAP32[($5 + Math_imul($7, 4) | 0) >> 2] | 0;
      $11 = 0;
      while_continue_1 : while (1) {
       if ((HEAPU8[($10 + $11 | 0) >> 0] | 0 | 0) != (0 | 0)) {
        $11 = $11 + 1 | 0;
        continue while_continue_1;
       }
       break while_continue_1;
      };
     }
     $11 = $lib_string_String_UTF8_decodeUnsafe($10 | 0, $11 | 0, 0 | 0) | 0;
     HEAP32[($56 + 4 | 0) >> 2] = $11;
     $13 = 720;
     HEAP32[($lib_memory___stack_pointer + 8 | 0) >> 2] = $13;
     $10 = $lib_string_String_indexOf($11 | 0, $13 | 0, 0 | 0) | 0;
     $13 = HEAP32[$0 >> 2] | 0;
     HEAP32[($lib_memory___stack_pointer + 12 | 0) >> 2] = $13;
     $85 = $13;
     $13 = $lib_string_String_substring($11 | 0, 0 | 0, $10 | 0) | 0;
     HEAP32[($lib_memory___stack_pointer + 16 | 0) >> 2] = $13;
     $93 = $13;
     $13 = $lib_string_String_substring($11 | 0, $10 + 1 | 0 | 0, $lib_builtins_i32_MAX_VALUE | 0) | 0;
     HEAP32[($lib_memory___stack_pointer + 20 | 0) >> 2] = $13;
     $13 = $lib_as_wasi_as_wasi_EnvironEntry_constructor(0 | 0, $93 | 0, $13 | 0) | 0;
     HEAP32[($lib_memory___stack_pointer + 8 | 0) >> 2] = $13;
     $lib_array_Array__lib_as_wasi_as_wasi_EnvironEntry__push($85 | 0, $13 | 0) | 0;
    }
    $7 = $7 + 1 | 0;
    continue for_loop_0;
   }
   break for_loop_0;
  };
  $13 = $0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer + 24 | 0;
  return $13 | 0;
 }
 
 function $lib_as_wasi_as_wasi_Environ_get($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $7 = 0, $3 = 0, $2 = 0, $6 = 0, i64toi32_i32$1 = 0, $4 = 0, $22 = 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer - 12 | 0;
  $stack_check();
  i64toi32_i32$1 = $lib_memory___stack_pointer;
  HEAP32[i64toi32_i32$1 >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = 0;
  HEAP32[($lib_memory___stack_pointer + 8 | 0) >> 2] = 0;
  $2 = HEAP32[$0 >> 2] | 0;
  HEAP32[$lib_memory___stack_pointer >> 2] = $2;
  $3 = 0;
  $4 = $lib_array_Array__lib_as_wasi_as_wasi_EnvironEntry__get_length($2 | 0) | 0;
  for_loop_0 : while (1) {
   if (($3 | 0) < ($4 | 0)) {
    for_continue_0 : {
     $22 = $lib_memory___stack_pointer;
     $6 = $lib_array_Array__lib_as_wasi_as_wasi_EnvironEntry____uget($2 | 0, $3 | 0) | 0;
     HEAP32[($22 + 4 | 0) >> 2] = $6;
     $7 = HEAP32[$6 >> 2] | 0;
     HEAP32[($lib_memory___stack_pointer + 8 | 0) >> 2] = $7;
     if ($lib_string_String___eq($7 | 0, $1 | 0) | 0) {
      $7 = HEAP32[($6 + 4 | 0) >> 2] | 0;
      $lib_memory___stack_pointer = $lib_memory___stack_pointer + 12 | 0;
      return $7 | 0;
     }
    }
    $3 = $3 + 1 | 0;
    continue for_loop_0;
   }
   break for_loop_0;
  };
  $7 = 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer + 12 | 0;
  return $7 | 0;
 }
 
 function assembly_wasi_start() {
  var $2 = 0, $1 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, $0 = 0, $7 = 0, $10 = 0, $11 = 0, $24 = 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer - 16 | 0;
  $stack_check();
  i64toi32_i32$1 = $lib_memory___stack_pointer;
  i64toi32_i32$0 = 0;
  HEAP32[i64toi32_i32$1 >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  i64toi32_i32$1 = $lib_memory___stack_pointer;
  i64toi32_i32$0 = 0;
  HEAP32[(i64toi32_i32$1 + 8 | 0) >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 12 | 0) >> 2] = i64toi32_i32$0;
  $7 = $lib_memory___stack_pointer;
  $0 = $lib_as_wasi_as_wasi_Environ_constructor(0 | 0) | 0;
  HEAP32[$7 >> 2] = $0;
  $10 = $lib_memory___stack_pointer;
  $11 = $lib_memory___stack_pointer;
  $2 = 832;
  HEAP32[($lib_memory___stack_pointer + 4 | 0) >> 2] = $2;
  $1 = $lib_as_wasi_as_wasi_Environ_get($0 | 0, $2 | 0) | 0;
  HEAP32[($11 + 8 | 0) >> 2] = $1;
  if ($1) {
   $24 = $1
  } else {
   $lib_wasi_index_abort(864 | 0, 928 | 0, 21 | 0, 24 | 0);
   abort();
  }
  $1 = $24;
  HEAP32[($10 + 8 | 0) >> 2] = $1;
  $2 = 992;
  HEAP32[($lib_memory___stack_pointer + 4 | 0) >> 2] = $2;
  $2 = $lib_string_String_concat($2 | 0, $1 | 0) | 0;
  HEAP32[($lib_memory___stack_pointer + 12 | 0) >> 2] = $2;
  $lib_as_wasi_as_wasi_Console_log($2 | 0);
  $lib_memory___stack_pointer = $lib_memory___stack_pointer + 16 | 0;
 }
 
 function $lib_as_wasi_as_wasi_FileSystem_open($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var i64toi32_i32$0 = 0, i64toi32_i32$1 = 0, i64toi32_i32$2 = 0, i64toi32_i32$3 = 0, $14 = 0, $5 = 0, $5$hi = 0, $4 = 0, $8 = 0, $11 = 0, $2 = 0, $3 = 0, $7 = 0, $99 = 0, $9 = 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer - 8 | 0;
  $stack_check();
  i64toi32_i32$1 = $lib_memory___stack_pointer;
  i64toi32_i32$0 = 0;
  HEAP32[i64toi32_i32$1 >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = i64toi32_i32$0;
  $2 = $lib_as_wasi_as_wasi_FileSystem_dirfdForPath($0 | 0) | 0;
  $3 = 1;
  $4 = 0;
  i64toi32_i32$0 = 0;
  $5 = 0;
  $5$hi = i64toi32_i32$0;
  $14 = 1232;
  HEAP32[$lib_memory___stack_pointer >> 2] = $14;
  if ($lib_string_String___eq($1 | 0, $14 | 0) | 0) {
   i64toi32_i32$0 = 0;
   i64toi32_i32$2 = 2;
   i64toi32_i32$1 = 0;
   i64toi32_i32$3 = 4;
   i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
   i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
   i64toi32_i32$2 = 0;
   i64toi32_i32$3 = 32;
   i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
   i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$3 | 0;
   i64toi32_i32$0 = 0;
   i64toi32_i32$3 = 2097152;
   i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$0 | 0;
   i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$3 | 0;
   i64toi32_i32$1 = 0;
   i64toi32_i32$3 = 16384;
   i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
   $5 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
   $5$hi = i64toi32_i32$1;
  } else {
   $14 = 1264;
   HEAP32[$lib_memory___stack_pointer >> 2] = $14;
   if ($lib_string_String___eq($1 | 0, $14 | 0) | 0) {
    i64toi32_i32$1 = 0;
    i64toi32_i32$0 = 64;
    i64toi32_i32$2 = 0;
    i64toi32_i32$3 = 2;
    i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
    i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$3 | 0;
    i64toi32_i32$0 = 0;
    i64toi32_i32$3 = 4;
    i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$0 | 0;
    i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$3 | 0;
    i64toi32_i32$1 = 0;
    i64toi32_i32$3 = 32;
    i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
    i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
    i64toi32_i32$2 = 0;
    i64toi32_i32$3 = 2097152;
    i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
    i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$3 | 0;
    i64toi32_i32$0 = 0;
    i64toi32_i32$3 = 1024;
    i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$0 | 0;
    $5 = i64toi32_i32$1 | i64toi32_i32$3 | 0;
    $5$hi = i64toi32_i32$0;
   } else {
    $14 = 1296;
    HEAP32[$lib_memory___stack_pointer >> 2] = $14;
    if ($lib_string_String___eq($1 | 0, $14 | 0) | 0) {
     $4 = 1 | 8 | 0;
     i64toi32_i32$0 = 0;
     i64toi32_i32$2 = 64;
     i64toi32_i32$1 = 0;
     i64toi32_i32$3 = 4;
     i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
     i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
     i64toi32_i32$2 = 0;
     i64toi32_i32$3 = 32;
     i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
     i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$3 | 0;
     i64toi32_i32$0 = 0;
     i64toi32_i32$3 = 2097152;
     i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$0 | 0;
     i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$3 | 0;
     i64toi32_i32$1 = 0;
     i64toi32_i32$3 = 1024;
     i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
     $5 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
     $5$hi = i64toi32_i32$1;
    } else {
     $14 = 1328;
     HEAP32[$lib_memory___stack_pointer >> 2] = $14;
     if ($lib_string_String___eq($1 | 0, $14 | 0) | 0) {
      $4 = 1 | 8 | 0 | 4 | 0;
      i64toi32_i32$1 = 0;
      i64toi32_i32$0 = 64;
      i64toi32_i32$2 = 0;
      i64toi32_i32$3 = 4;
      i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
      i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$3 | 0;
      i64toi32_i32$0 = 0;
      i64toi32_i32$3 = 32;
      i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$0 | 0;
      i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$3 | 0;
      i64toi32_i32$1 = 0;
      i64toi32_i32$3 = 2097152;
      i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
      i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
      i64toi32_i32$2 = 0;
      i64toi32_i32$3 = 1024;
      i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
      $5 = i64toi32_i32$0 | i64toi32_i32$3 | 0;
      $5$hi = i64toi32_i32$2;
     } else {
      $14 = 1200;
      HEAP32[$lib_memory___stack_pointer >> 2] = $14;
      if ($lib_string_String___eq($1 | 0, $14 | 0) | 0) {
       $4 = 1 | 8 | 0;
       i64toi32_i32$2 = 0;
       i64toi32_i32$1 = 64;
       i64toi32_i32$0 = 0;
       i64toi32_i32$3 = 2;
       i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$0 | 0;
       i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$3 | 0;
       i64toi32_i32$1 = 0;
       i64toi32_i32$3 = 4;
       i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
       i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
       i64toi32_i32$2 = 0;
       i64toi32_i32$3 = 32;
       i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
       i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$3 | 0;
       i64toi32_i32$0 = 0;
       i64toi32_i32$3 = 2097152;
       i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$0 | 0;
       i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$3 | 0;
       i64toi32_i32$1 = 0;
       i64toi32_i32$3 = 1024;
       i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
       $5 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
       $5$hi = i64toi32_i32$1;
      } else {
       $14 = 1360;
       HEAP32[$lib_memory___stack_pointer >> 2] = $14;
       if ($lib_string_String___eq($1 | 0, $14 | 0) | 0) {
        $4 = 1 | 8 | 0 | 4 | 0;
        i64toi32_i32$1 = 0;
        i64toi32_i32$0 = 64;
        i64toi32_i32$2 = 0;
        i64toi32_i32$3 = 2;
        i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
        i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$3 | 0;
        i64toi32_i32$0 = 0;
        i64toi32_i32$3 = 4;
        i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$0 | 0;
        i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$3 | 0;
        i64toi32_i32$1 = 0;
        i64toi32_i32$3 = 32;
        i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$1 | 0;
        i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$3 | 0;
        i64toi32_i32$2 = 0;
        i64toi32_i32$3 = 2097152;
        i64toi32_i32$2 = i64toi32_i32$1 | i64toi32_i32$2 | 0;
        i64toi32_i32$1 = i64toi32_i32$0 | i64toi32_i32$3 | 0;
        i64toi32_i32$0 = 0;
        i64toi32_i32$3 = 1024;
        i64toi32_i32$0 = i64toi32_i32$2 | i64toi32_i32$0 | 0;
        $5 = i64toi32_i32$1 | i64toi32_i32$3 | 0;
        $5$hi = i64toi32_i32$0;
       } else {
        $14 = 0;
        $lib_memory___stack_pointer = $lib_memory___stack_pointer + 8 | 0;
        return $14 | 0;
       }
      }
     }
    }
   }
  }
  i64toi32_i32$0 = $5$hi;
  $7 = 0;
  $99 = $lib_memory___stack_pointer;
  $argumentsLength = 1;
  $8 = $lib_string_String_UTF8_encode_varargs($0 | 0, 0 | 0, 0 | 0) | 0;
  HEAP32[($99 + 4 | 0) >> 2] = $8;
  $9 = $lib_arraybuffer_ArrayBuffer_get_byteLength($8 | 0) | 0;
  $11 = 1376;
  i64toi32_i32$1 = i64toi32_i32$0;
  if (((legalfunc$_lib_bindings_wasi_snapshot_preview1_path_open($2 | 0, $3 | 0, $8 | 0, $9 | 0, $4 | 0, $5 | 0, i64toi32_i32$0 | 0, $5 | 0, i64toi32_i32$0 | 0, $7 | 0, $11 | 0) | 0) & 65535 | 0 | 0) != (0 | 0)) {
   $14 = 0;
   $lib_memory___stack_pointer = $lib_memory___stack_pointer + 8 | 0;
   return $14 | 0;
  }
  $14 = $lib_as_wasi_as_wasi_Descriptor_constructor(0 | 0, HEAP32[$11 >> 2] | 0 | 0) | 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer + 8 | 0;
  return $14 | 0;
 }
 
 function assembly_wasi_writeFile() {
  var $2 = 0, i64toi32_i32$1 = 0, $0 = 0, $10 = 0, $23 = 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer - 8 | 0;
  $stack_check();
  i64toi32_i32$1 = $lib_memory___stack_pointer;
  HEAP32[i64toi32_i32$1 >> 2] = 0;
  HEAP32[(i64toi32_i32$1 + 4 | 0) >> 2] = 0;
  $2 = 1152;
  HEAP32[$lib_memory___stack_pointer >> 2] = $2;
  $10 = $2;
  $2 = 1200;
  HEAP32[($lib_memory___stack_pointer + 4 | 0) >> 2] = $2;
  $0 = $lib_as_wasi_as_wasi_FileSystem_open($10 | 0, $2 | 0) | 0;
  if (!$0) {
   $2 = 1408;
   HEAP32[$lib_memory___stack_pointer >> 2] = $2;
   $23 = $2;
   $2 = 1152;
   HEAP32[($lib_memory___stack_pointer + 4 | 0) >> 2] = $2;
   $lib_wasi_index_abort($lib_string_String___concat($23 | 0, $2 | 0) | 0 | 0, 928 | 0, 13 | 0, 23 | 0);
   abort();
  }
  $2 = 1488;
  HEAP32[($lib_memory___stack_pointer + 4 | 0) >> 2] = $2;
  $lib_as_wasi_as_wasi_Descriptor_writeStringLn($0 | 0, $2 | 0);
  $lib_memory___stack_pointer = $lib_memory___stack_pointer + 8 | 0;
 }
 
 function $lib_rt___newArray($0, $1, $2, $3) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  var $6 = 0, $5 = 0, $4 = 0, $14 = 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer - 4 | 0;
  $stack_check();
  HEAP32[$lib_memory___stack_pointer >> 2] = 0;
  $4 = $0 << $1 | 0;
  $14 = $lib_memory___stack_pointer;
  $5 = $lib_rt___newBuffer($4 | 0, 0 | 0, $3 | 0) | 0;
  HEAP32[$14 >> 2] = $5;
  $6 = $lib_rt_itcms___new(16 | 0, $2 | 0) | 0;
  HEAP32[$6 >> 2] = $5;
  $lib_rt_itcms___link($6 | 0, $5 | 0, 0 | 0);
  HEAP32[($6 + 4 | 0) >> 2] = $5;
  HEAP32[($6 + 8 | 0) >> 2] = $4;
  HEAP32[($6 + 12 | 0) >> 2] = $0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer + 4 | 0;
  return $6 | 0;
 }
 
 function $lib_arraybuffer_ArrayBuffer_constructor($0, $1) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  var $2 = 0, $9 = 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer - 4 | 0;
  $stack_check();
  HEAP32[$lib_memory___stack_pointer >> 2] = 0;
  if ($1 >>> 0 > 1073741820 >>> 0) {
   $lib_wasi_index_abort(608 | 0, 656 | 0, 49 | 0, 43 | 0);
   abort();
  }
  $9 = $lib_memory___stack_pointer;
  $2 = $lib_rt_itcms___new($1 | 0, 0 | 0) | 0;
  HEAP32[$9 >> 2] = $2;
  wasm2js_memory_fill($2, 0, $1);
  $lib_memory___stack_pointer = $lib_memory___stack_pointer + 4 | 0;
  return $2 | 0;
 }
 
 function $lib_string_String_UTF8_decodeUnsafe($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $8 = 0, $6 = 0, $4 = 0, $5 = 0, $9 = 0, $10 = 0, $25 = 0, $13 = 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer - 4 | 0;
  $stack_check();
  HEAP32[$lib_memory___stack_pointer >> 2] = 0;
  $3 = $0;
  $4 = $3 + $1 | 0;
  if (!($4 >>> 0 >= $3 >>> 0)) {
   $lib_wasi_index_abort(0 | 0, 128 | 0, 767 | 0, 7 | 0);
   abort();
  }
  $25 = $lib_memory___stack_pointer;
  $5 = $lib_rt_itcms___new($1 << 1 | 0 | 0, 1 | 0) | 0;
  HEAP32[$25 >> 2] = $5;
  $6 = $5;
  while_break_0 : {
   while_continue_0 : while (1) {
    if ($3 >>> 0 < $4 >>> 0) {
     $8 = HEAPU8[$3 >> 0] | 0;
     $3 = $3 + 1 | 0;
     if (!($8 & 128 | 0)) {
      if ($2 & !$8 | 0) {
       break while_break_0
      }
      HEAP16[$6 >> 1] = $8;
     } else {
      if (($4 | 0) == ($3 | 0)) {
       break while_break_0
      }
      $9 = (HEAPU8[$3 >> 0] | 0) & 63 | 0;
      $3 = $3 + 1 | 0;
      if (($8 & 224 | 0 | 0) == (192 | 0)) {
       HEAP16[$6 >> 1] = ($8 & 31 | 0) << 6 | 0 | $9 | 0
      } else {
       if (($4 | 0) == ($3 | 0)) {
        break while_break_0
       }
       $10 = (HEAPU8[$3 >> 0] | 0) & 63 | 0;
       $3 = $3 + 1 | 0;
       if (($8 & 240 | 0 | 0) == (224 | 0)) {
        $8 = ($8 & 15 | 0) << 12 | 0 | ($9 << 6 | 0) | 0 | $10 | 0
       } else {
        if (($4 | 0) == ($3 | 0)) {
         break while_break_0
        }
        $8 = ($8 & 7 | 0) << 18 | 0 | ($9 << 12 | 0) | 0 | ($10 << 6 | 0) | 0 | ((HEAPU8[$3 >> 0] | 0) & 63 | 0) | 0;
        $3 = $3 + 1 | 0;
       }
       if ($8 >>> 0 < 65536 >>> 0) {
        HEAP16[$6 >> 1] = $8
       } else {
        $8 = $8 - 65536 | 0;
        HEAP32[$6 >> 2] = $8 >>> 10 | 0 | 55296 | 0 | (($8 & 1023 | 0 | 56320 | 0) << 16 | 0) | 0;
        $6 = $6 + 2 | 0;
       }
      }
     }
     $6 = $6 + 2 | 0;
     continue while_continue_0;
    }
    break while_continue_0;
   };
  }
  $13 = $lib_rt_itcms___renew($5 | 0, $6 - $5 | 0 | 0) | 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer + 4 | 0;
  return $13 | 0;
 }
 
 function $lib_as_wasi_as_wasi_EnvironEntry_constructor($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $9 = 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer - 4 | 0;
  $stack_check();
  HEAP32[$lib_memory___stack_pointer >> 2] = 0;
  if (!$0) {
   $9 = $lib_memory___stack_pointer;
   $0 = $lib_rt_itcms___new(8 | 0, 4 | 0) | 0;
   HEAP32[$9 >> 2] = $0;
  }
  $lib_as_wasi_as_wasi_EnvironEntry_set_key($0 | 0, $1 | 0);
  $lib_as_wasi_as_wasi_EnvironEntry_set_value($0 | 0, $2 | 0);
  $lib_memory___stack_pointer = $lib_memory___stack_pointer + 4 | 0;
  return $0 | 0;
 }
 
 function $lib_string_String_substring($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $4 = 0, $5 = 0, $3 = 0, $8 = 0, $10 = 0, $11 = 0, $7 = 0, $9 = 0, $78 = 0, $6 = 0, $84 = 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer - 4 | 0;
  $stack_check();
  HEAP32[$lib_memory___stack_pointer >> 2] = 0;
  $3 = $lib_string_String_get_length($0 | 0) | 0;
  $4 = $1;
  $5 = 0;
  $5 = ($4 | 0) > ($5 | 0) ? $4 : $5;
  $4 = $3;
  $6 = ($5 | 0) < ($4 | 0) ? $5 : $4;
  $4 = $2;
  $5 = 0;
  $5 = ($4 | 0) > ($5 | 0) ? $4 : $5;
  $4 = $3;
  $7 = ($5 | 0) < ($4 | 0) ? $5 : $4;
  $4 = $6;
  $5 = $7;
  $8 = (($4 | 0) < ($5 | 0) ? $4 : $5) << 1 | 0;
  $5 = $4;
  $4 = $7;
  $9 = (($5 | 0) > ($4 | 0) ? $5 : $4) << 1 | 0;
  $10 = $9 - $8 | 0;
  if (!$10) {
   $lib_memory___stack_pointer = $lib_memory___stack_pointer + 4 | 0;
   return 752 | 0;
  }
  if (!$8) {
   $78 = ($9 | 0) == ($3 << 1 | 0 | 0)
  } else {
   $78 = 0
  }
  if ($78) {
   $lib_memory___stack_pointer = $lib_memory___stack_pointer + 4 | 0;
   return $0 | 0;
  }
  $84 = $lib_memory___stack_pointer;
  $11 = $lib_rt_itcms___new($10 | 0, 1 | 0) | 0;
  HEAP32[$84 >> 2] = $11;
  wasm2js_memory_copy($11, $0 + $8 | 0, $10);
  $lib_memory___stack_pointer = $lib_memory___stack_pointer + 4 | 0;
  return $11 | 0;
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
   return 752 | 0;
  }
  $24 = $lib_memory___stack_pointer;
  $5 = $lib_rt_itcms___new($4 | 0, 1 | 0) | 0;
  HEAP32[$24 >> 2] = $5;
  wasm2js_memory_copy($5, $0, $2);
  wasm2js_memory_copy($5 + $2 | 0, $1, $3);
  $lib_memory___stack_pointer = $lib_memory___stack_pointer + 4 | 0;
  return $5 | 0;
 }
 
 function $lib_string_String_UTF8_encode($0, $1, $2) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  var $3 = 0, $8 = 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer - 4 | 0;
  $stack_check();
  HEAP32[$lib_memory___stack_pointer >> 2] = 0;
  $8 = $lib_memory___stack_pointer;
  $3 = $lib_rt_itcms___new($lib_string_String_UTF8_byteLength($0 | 0, $1 | 0) | 0 | 0, 0 | 0) | 0;
  HEAP32[$8 >> 2] = $3;
  $lib_string_String_UTF8_encodeUnsafe($0 | 0, $lib_string_String_get_length($0 | 0) | 0 | 0, $3 | 0, $1 | 0, $2 | 0) | 0;
  $lib_memory___stack_pointer = $lib_memory___stack_pointer + 4 | 0;
  return $3 | 0;
 }
 
 function legalfunc$_lib_bindings_wasi_snapshot_preview1_path_open($0, $1, $2, $3, $4, $5, $5$hi, $6, $6$hi, $7, $8) {
  $0 = $0 | 0;
  $1 = $1 | 0;
  $2 = $2 | 0;
  $3 = $3 | 0;
  $4 = $4 | 0;
  $5 = $5 | 0;
  $5$hi = $5$hi | 0;
  $6 = $6 | 0;
  $6$hi = $6$hi | 0;
  $7 = $7 | 0;
  $8 = $8 | 0;
  var i64toi32_i32$4 = 0, i64toi32_i32$1 = 0, i64toi32_i32$0 = 0, i64toi32_i32$3 = 0, i64toi32_i32$2 = 0, $24 = 0, $25 = 0, $9 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $15 = 0, $18 = 0, $20 = 0;
  $9 = $0;
  $10 = $1;
  $11 = $2;
  $12 = $3;
  $13 = $4;
  i64toi32_i32$0 = $5$hi;
  $15 = $5;
  i64toi32_i32$2 = $5;
  i64toi32_i32$1 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$1 = 0;
   $24 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$1 = i64toi32_i32$0 >>> i64toi32_i32$4 | 0;
   $24 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$0 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$2 >>> i64toi32_i32$4 | 0) | 0;
  }
  $18 = $24;
  i64toi32_i32$1 = $6$hi;
  $20 = $6;
  i64toi32_i32$0 = $6;
  i64toi32_i32$2 = 0;
  i64toi32_i32$3 = 32;
  i64toi32_i32$4 = i64toi32_i32$3 & 31 | 0;
  if (32 >>> 0 <= (i64toi32_i32$3 & 63 | 0) >>> 0) {
   i64toi32_i32$2 = 0;
   $25 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
  } else {
   i64toi32_i32$2 = i64toi32_i32$1 >>> i64toi32_i32$4 | 0;
   $25 = (((1 << i64toi32_i32$4 | 0) - 1 | 0) & i64toi32_i32$1 | 0) << (32 - i64toi32_i32$4 | 0) | 0 | (i64toi32_i32$0 >>> i64toi32_i32$4 | 0) | 0;
  }
  return legalimport$_lib_bindings_wasi_snapshot_preview1_path_open($9 | 0, $10 | 0, $11 | 0, $12 | 0, $13 | 0, $15 | 0, $18 | 0, $20 | 0, $25 | 0, $7 | 0, $8 | 0) | 0 | 0;
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
  "add": assembly_wasi_add, 
  "writeFile": assembly_wasi_writeFile, 
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
  "_start": $start
 };
}

var memasmFunc = new ArrayBuffer(65536);
var retasmFunc = asmFunc(  { abort: function() { throw new Error('abort'); },
    fd_write,
    proc_exit,
    environ_sizes_get,
    environ_get,
    path_open,
    memory: { buffer : memasmFunc }
  });
export var add = retasmFunc.add;
export var writeFile = retasmFunc.writeFile;
export var __new = retasmFunc.__new;
export var __pin = retasmFunc.__pin;
export var __unpin = retasmFunc.__unpin;
export var __collect = retasmFunc.__collect;
export var memory = retasmFunc.memory;
export var _start = retasmFunc._start;
