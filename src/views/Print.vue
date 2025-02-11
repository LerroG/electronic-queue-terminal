<template>
  <div
    @click="progres()"
    class="print"
    :style="{
      width: bodySize.bodyWidth + 'px',
      height: bodySize.bodyHeight + 'px',
    }"
  >
  <div>
      <pre>{{ print.design }}</pre>
    </div>
    <img
      v-if="print.design.PageBackground.Image != ''"
      class="center__bg"
      :src="print.design.PageBackground.Image"
      alt="Photo"
    />
    <div
      v-else-if="print.design.PageBackground.Color != ''"
      class="center__bg-color"
      :style="{
        background: print.design.PageBackground.Color,
      }"
    ></div>
    <!-- <div v-for="item in print.design.Page" :key="item.id" class="item" :style="{
      position: 'absolute',
      top: item.position.top + 'px',
      left: item.position.left + 'px',
      width: item.size.width + 'px',
      height: item.size.height + 'px',
      zIndex: item.position.zIndex
    }">

      <p v-if="item.parametr == 'text' && lang == 'ru'" class="text" :style="{
        width: item.size.width + 'px',
        height: item.size.height + 'px',
        background: item.backColor,
        color: item.textColor,
        fontFamily: item.textFont,
        fontSize: item.textSize + 'px',
        lineHeight: item.lineHeight + 'px',
        fontWeight: item.fontWeight,
        fontStyle: item.fontStyle,
        textDecoration: item.textDecoration,
        margin: 0,
        textAlign: item.textAlign,
        zIndex: item.position.zIndex
      }">{{ item.textRU }}
      </p>
      <p v-if="item.parametr == 'text' && lang == 'uz'" class="text" :style="{
        width: item.size.width + 'px',
        height: item.size.height + 'px',
        background: item.backColor,
        color: item.textColor,
        fontFamily: item.textFont,
        fontSize: item.textSize + 'px',
        lineHeight: item.lineHeight + 'px',
        fontWeight: item.fontWeight,
        fontStyle: item.fontStyle,
        textDecoration: item.textDecoration,
        margin: 0,
        whiteSpace: 'normal',
        textAlign: item.textAlign,
        zIndex: item.position.zIndex
      }">{{ item.textUZ }}
      </p>
      <p v-if="item.parametr == 'text' && lang == 'en'" class="text" :style="{
        width: item.size.width + 'px',
        height: item.size.height + 'px',
        background: item.backColor,
        color: item.textColor,
        fontFamily: item.textFont,
        fontSize: item.textSize + 'px',
        lineHeight: item.lineHeight + 'px',
        fontWeight: item.fontWeight,
        fontStyle: item.fontStyle,
        textDecoration: item.textDecoration,
        margin: 0,
        whiteSpace: 'normal',
        textAlign: item.textAlign,
        zIndex: item.position.zIndex
      }">{{ item.textEN }}
      </p>
      <p v-if="item.parametr == 'text' && lang == 'oz'" class="text" :style="{
        width: item.size.width + 'px',
        height: item.size.height + 'px',
        background: item.backColor,
        color: item.textColor,
        fontFamily: item.textFont,
        fontSize: item.textSize + 'px',
        lineHeight: item.lineHeight + 'px',
        fontWeight: item.fontWeight,
        fontStyle: item.fontStyle,
        textDecoration: item.textDecoration,
        margin: 0,
        whiteSpace: 'normal',
        textAlign: item.textAlign,
        zIndex: item.position.zIndex
      }">{{ item.textOZ }}
      </p>

      <img @click="all(item)" v-if="item.parametr == 'image'" :src="item.urlImage" alt="" class="image" :style="{
        width: item.size.width + 'px',
        height: item.size.height + 'px',
        borderWidth: item.border.borderWidth + 'px',
        borderStyle: 'solid',
        borderColor: item.border.borderColor,
        borderRadius: item.border.borderRadius + 'px',
        zIndex: item.position.zIndex
      }">

      <span v-if="item.parametr == 'box'" class="box" :style="{
        width: item.size.width + 'px',
        height: item.size.height + 'px',
        background: item.backColor,
        borderWidth: item.border.borderWidth + 'px',
        borderStyle: 'solid',
        borderColor: item.border.borderColor,
        borderRadius: item.border.borderRadius + 'px',
        zIndex: item.position.zIndex
      }"></span>

      <div v-if="item.parametr == 'progresbar'" class="progresbar" :style="{
        width: item.size.width + 'px',
        height: item.size.height + 'px',
        zIndex: item.position.zIndex
      }">
        <div id="bar" :style="{
          width: '0%',
          height: '100%',
          background: item.backColor,
          borderWidth: item.border.borderWidth + 'px',
          borderStyle: 'solid',
          borderColor: item.border.borderColor,
          borderRadius: item.border.borderRadius + 'px',
        }"></div>
      </div>
    </div> -->

    
    <div
      v-for="item in print.design.Page"
      :key="item.id"
      class="item"
      :style="{
        position: 'absolute',
        top: item.position.top + 'px',
        left: item.position.left + 'px',
        width: item.size.width + 'px',
        height: item.size.height + 'px',
        zIndex: item.position.zIndex,
      }"
    >
      <div
        :id="item.id"
        @click="all(item)"
        v-if="item.parametr == 'btn'"
        class="button"
        :style="{
          width: item.size.width + 'px',
          height: item.size.height + 'px',
          background: item.backColor,
          color: item.textColor,
          fontFamily: item.textFont,
          fontSize: item.textSize + 'px',
          lineHeight: item.textSize + 'px',
          fontWeight: item.fontWeight,
          fontStyle: item.fontStyle,
          textDecoration: item.textDecoration,
          textAlign: item.textAlign,
          borderWidth: item.border.borderWidth + 'px',
          borderStyle: 'solid',
          borderColor: item.border.borderColor,
          borderRadius: item.border.borderRadius + 'px',
          zIndex: item.position.zIndex,
          boxShadow:
            item.boxShadow != undefined
              ? `${item.boxShadow.width}px ${item.boxShadow.height}px ${item.boxShadow.blur}px ${item.boxShadow.stretching}px rgba(${item.boxShadow.colorRGB},${item.boxShadow.opacity})`
              : '',
          padding: item.padding
            ? `${item.padding.top}px ${item.padding.right}px ${item.padding.bottom}px ${item.padding.left}px`
            : '',
        }"
      >
        <p
          v-if="lang == 'ru'"
          :style="{
            width: '100%',
            color: item.textColor,
            fontFamily: item.textFont,
            fontSize: item.textSize + 'px',
            lineHeight: item.textSize + 'px',
            fontWeight: item.fontWeight,
            fontStyle: item.fontStyle,
            textDecoration: item.textDecoration,
            textAlign: item.textAlign,
          }"
        >
          {{ item.textRU }}
        </p>
        <p
          v-if="lang == 'uz'"
          :style="{
            width: '100%',
            color: item.textColor,
            fontFamily: item.textFont,
            fontSize: item.textSize + 'px',
            lineHeight: item.textSize + 'px',
            fontWeight: item.fontWeight,
            fontStyle: item.fontStyle,
            textDecoration: item.textDecoration,
            textAlign: item.textAlign,
          }"
        >
          {{ item.textUZ }}
        </p>
        <p
          v-if="lang == 'en'"
          :style="{
            width: '100%',
            color: item.textColor,
            fontFamily: item.textFont,
            fontSize: item.textSize + 'px',
            lineHeight: item.textSize + 'px',
            fontWeight: item.fontWeight,
            fontStyle: item.fontStyle,
            textDecoration: item.textDecoration,
            textAlign: item.textAlign,
          }"
        >
          {{ item.textEN }}
        </p>
        <p
          v-if="lang == 'oz'"
          :style="{
            width: '100%',
            color: item.textColor,
            fontFamily: item.textFont,
            fontSize: item.textSize + 'px',
            lineHeight: item.textSize + 'px',
            fontWeight: item.fontWeight,
            fontStyle: item.fontStyle,
            textDecoration: item.textDecoration,
            textAlign: item.textAlign,
          }"
        >
          {{ item.textOZ }}
        </p>
      </div>

      <p
        :id="item.id"
        @click="all(item)"
        v-if="item.parametr == 'text' && item.isTicketNumber"
        class="text"
        :style="{
          width: item.size.width + 'px',
          height: item.size.height + 'px',
          background: item.backColor,
          color: item.textColor,
          fontFamily: item.textFont,
          fontSize: item.textSize + 'px',
          lineHeight: item.lineHeight + 'px',
          fontWeight: item.fontWeight,
          fontStyle: item.fontStyle,
          textDecoration: item.textDecoration,
          margin: 0,
          textAlign: item.textAlign,
          zIndex: item.position.zIndex,
        }"
      >
        {{ ticketNumber }}
      </p>

      <p
        :id="item.id"
        @click="all(item)"
        v-if="item.parametr == 'text' && item.isWaitingTime"
        class="text"
        :style="{
          width: item.size.width + 'px',
          height: item.size.height + 'px',
          background: item.backColor,
          color: item.textColor,
          fontFamily: item.textFont,
          fontSize: item.textSize + 'px',
          lineHeight: item.lineHeight + 'px',
          fontWeight: item.fontWeight,
          fontStyle: item.fontStyle,
          textDecoration: item.textDecoration,
          margin: 0,
          textAlign: item.textAlign,
          zIndex: item.position.zIndex,
        }"
      >
        {{ ticketWaitingTime }}
      </p>

      <p
        :id="item.id"
        @click="all(item)"
        v-if="item.parametr == 'text' && !item.isTicketNumber && !item.isWaitingTime && lang == 'ru'"
        class="text"
        :style="{
          width: item.size.width + 'px',
          height: item.size.height + 'px',
          background: item.backColor,
          color: item.textColor,
          fontFamily: item.textFont,
          fontSize: item.textSize + 'px',
          lineHeight: item.lineHeight + 'px',
          fontWeight: item.fontWeight,
          fontStyle: item.fontStyle,
          textDecoration: item.textDecoration,
          margin: 0,
          textAlign: item.textAlign,
          zIndex: item.position.zIndex,
        }"
      >
        {{ item.textRU }}
      </p>
      <p
        :id="item.id"
        @click="all(item)"
        v-if="item.parametr == 'text' && !item.isTicketNumber && lang == 'uz'"
        class="text"
        :style="{
          width: item.size.width + 'px',
          height: item.size.height + 'px',
          background: item.backColor,
          color: item.textColor,
          fontFamily: item.textFont,
          fontSize: item.textSize + 'px',
          lineHeight: item.lineHeight + 'px',
          fontWeight: item.fontWeight,
          fontStyle: item.fontStyle,
          textDecoration: item.textDecoration,
          margin: 0,
          whiteSpace: 'normal',
          textAlign: item.textAlign,
          zIndex: item.position.zIndex,
        }"
      >
        {{ item.textUZ }}
      </p>
      <p
        :id="item.id"
        @click="all(item)"
        v-if="item.parametr == 'text' && !item.isTicketNumber && lang == 'en'"
        class="text"
        :style="{
          width: item.size.width + 'px',
          height: item.size.height + 'px',
          background: item.backColor,
          color: item.textColor,
          fontFamily: item.textFont,
          fontSize: item.textSize + 'px',
          lineHeight: item.lineHeight + 'px',
          fontWeight: item.fontWeight,
          fontStyle: item.fontStyle,
          textDecoration: item.textDecoration,
          margin: 0,
          whiteSpace: 'normal',
          textAlign: item.textAlign,
          zIndex: item.position.zIndex,
        }"
      >
        {{ item.textEN }}
      </p>
      <p
        :id="item.id"
        @click="all(item)"
        v-if="item.parametr == 'text' && !item.isTicketNumber && lang == 'oz'"
        class="text"
        :style="{
          width: item.size.width + 'px',
          height: item.size.height + 'px',
          background: item.backColor,
          color: item.textColor,
          fontFamily: item.textFont,
          fontSize: item.textSize + 'px',
          lineHeight: item.lineHeight + 'px',
          fontWeight: item.fontWeight,
          fontStyle: item.fontStyle,
          textDecoration: item.textDecoration,
          margin: 0,
          whiteSpace: 'normal',
          textAlign: item.textAlign,
          zIndex: item.position.zIndex,
        }"
      >
        {{ item.textOZ }}
      </p>

      <img
        :id="item.id"
        @click="all(item)"
        v-if="item.parametr == 'image'"
        :src="item.urlImage"
        alt=""
        class="image"
        :style="{
          width: item.size.width + 'px',
          height: item.size.height + 'px',
          background: item.backColor,
          borderWidth: item.border.borderWidth + 'px',
          borderStyle: 'solid',
          borderColor: item.border.borderColor,
          borderRadius: item.border.borderRadius + 'px',
          boxShadow:
            item.boxShadow != undefined
              ? `${item.boxShadow.width}px ${item.boxShadow.height}px ${item.boxShadow.blur}px ${item.boxShadow.stretching}px rgba(${item.boxShadow.colorRGB},${item.boxShadow.opacity})`
              : '',
          zIndex: item.position.zIndex,
        }"
      />

      <span
        :id="item.id"
        @click="all(item)"
        v-if="item.parametr == 'box'"
        class="box"
        :style="{
          width: item.size.width + 'px',
          height: item.size.height + 'px',
          background: item.backColor,
          borderWidth: item.border.borderWidth + 'px',
          borderStyle: 'solid',
          borderColor: item.border.borderColor,
          borderRadius: item.border.borderRadius + 'px',
          boxShadow:
            item.boxShadow != undefined
              ? `${item.boxShadow.width}px ${item.boxShadow.height}px ${item.boxShadow.blur}px ${item.boxShadow.stretching}px rgba(${item.boxShadow.colorRGB},${item.boxShadow.opacity})`
              : '',
          zIndex: item.position.zIndex,
        }"
      ></span>

      <!-- <div v-if="item.parametr == 'numpad'" class="numpad" :style="{
        width: 'auto',
        height: 'auto',
        zIndex: item.position.zIndex,
      }">
        <input type="text" v-model="numpadText" :style="{
          width: item.size.width + 'px',
          height: 'auto',
          fontFamily: item.textFont,
          fontSize: item.textSize + 'px',
          fontWeight: item.fontWeight,
          borderWidth: item.border.borderWidth + 'px',
          borderStyle: 'solid',
          borderColor: item.border.borderColor,
          borderRadius: item.border.borderRadius + 'px',
        }">
        <div class="number" :style="{
          width: item.size.numpadWidth + 'px',
          height: 'auto'
        }">
          <button v-for="index in 9" :key="index" class="number__item" @click="numbad(index)" :style="{
            width: item.size.buttonWidth + 'px',
            heights: item.size.buttonHeight + 'px',
          }">{{ index }}</button>
          <button class="number__item" @click="numbad('c')" :style="{
            width: item.size.buttonWidth + 'px',
            heights: item.size.buttonHeight + 'px',
          }">C</button>
          <button class="number__item" @click="numbad(0)" :style="{
            width: item.size.buttonWidth + 'px',
            heights: item.size.buttonHeight + 'px',
          }">0</button>
          <button class="number__item" @click="numbad('backspace')" :style="{
            width: item.size.buttonWidth + 'px',
            heights: item.size.buttonHeight + 'px',
          }">⌫</button>
        </div>
      </div> -->

      <!-- <div v-if="item.parametr == 'selection'" class="selection" :style="{
        width: item.size.width + 'px',
        height: item.size.height + 'px',
        gridColumnGap: item.columnGap + 'px',
        gridRowGap: item.rowGap + 'px',
        overflowY: 'auto'
      }">
        <div v-for="index in item.countBtn" :key="index" :id="'s' + index"
          @click="allSelectFunciton(item, 'Clerk', index)" class="selection__item" :style="{
            display: 'none',
            width: item.buttonWidth + 'px',
            height: item.buttonHeight + 'px',
            background: item.backColor,
            color: item.textColor,
            fontFamily: item.textFont,
            fontSize: item.textSize + 'px',
            lineHeight: item.textSize + 'px',
            fontWeight: item.fontWeight,
            fontStyle: item.fontStyle,
            textDecoration: item.textDecoration,
            textAlign: item.textAlign,
            borderWidth: item.border.borderWidth + 'px',
            borderStyle: 'solid',
            borderColor: item.border.borderColor,
            borderRadius: item.border.borderRadius + 'px',
            zIndex: item.position.zIndex,
            transform: 'scale(1)'
          }">
          <img src="/design/img/pl.jpg" alt="photo" :style="{
            width: item.photo.width + 'px',
            height: item.photo.height + 'px',
            top: item.photo.top + 'px',
            left: item.photo.left + 'px',
          }">
          <p :id="'t' + index" :style="{
            width: '100%',
            color: item.textColor,
            fontFamily: item.textFont,
            fontSize: item.textSize + 'px',
            lineHeight: item.textSize + 'px',
            fontWeight: item.fontWeight,
            fontStyle: item.fontStyle,
            textDecoration: item.textDecoration,
            textAlign: item.textAlign,
            top: item.textTop + 'px',
            left: item.textLeft + 'px',
          }">{{ item.text }}</p>
          <p :id="'clerkInDeskName' + index" :style="{
            width: '100%',
            color: item.textColor,
            fontFamily: item.textFont,
            fontSize: item.textSize - 2 + 'px',
            lineHeight: item.textSize - 2 + 'px',
            fontWeight: item.fontWeight,
            fontStyle: item.fontStyle,
            textDecoration: item.textDecoration,
            textAlign: item.textAlign,
            top: item.textTop + 15 + 'px',
            left: item.textLeft + 'px',
          }">{{ item.text }}</p>
          <p :id="'clerkClientsCount' + index" :style="{
            width: '100%',
            color: item.textColor,
            fontFamily: item.textFont,
            fontSize: item.textSize - 2 + 'px',
            lineHeight: item.textSize - 2 + 'px',
            fontWeight: item.fontWeight,
            fontStyle: item.fontStyle,
            textDecoration: item.textDecoration,
            textAlign: item.textAlign,
            top: item.textTop + 30 + 'px',
            left: item.textLeft + 'px',
          }">{{ item.text }}</p>
        </div>
      </div> -->

      <marquee
        v-if="item.parametr == 'runningLine'"
        direction="left"
        :style="{
          display: 'flex',
          alignItems: 'center',
          width: item.size.width + 'px',
          height: item.size.height + 'px',
          background: item.backColor,
          // background: item.color,
          color: item.textColor,
          fontFamily: item.textFont,
          fontSize: item.textSize + 'px',
          lineHeight: item.lineHeight + 'px',
          fontWeight: item.fontWeight,
          fontStyle: item.fontStyle,
          textDecoration: item.textDecoration,
          borderWidth: item.border.borderWidth + 'px',
          borderStyle: 'solid',
          borderColor: item.border.borderColor,
          margin: 0,
          textAlign: item.textAlign,
          boxShadow:
            item.boxShadow != undefined
              ? `${item.boxShadow.width}px ${item.boxShadow.height}px ${item.boxShadow.blur}px ${item.boxShadow.stretching}px rgba(${item.boxShadow.colorRGB},${item.boxShadow.opacity})`
              : '',
          zIndex: item.position.zIndex,
        }"
        >{{ item.text }}</marquee
      >

      <div
        :id="item.id"
        @click="all(item)"
        v-if="item.parametr == 'btnAndPhoto'"
        class="btnAndPhoto"
        :style="{
          width: item.size.width + 'px',
          height: item.size.height + 'px',
          background: item.backColor,
          color: item.textColor,
          fontFamily: item.textFont,
          fontSize: item.textSize + 'px',
          lineHeight: item.textSize + 'px',
          fontWeight: item.fontWeight,
          fontStyle: item.fontStyle,
          textDecoration: item.textDecoration,
          textAlign: item.textAlign,
          borderWidth: item.border.borderWidth + 'px',
          borderStyle: 'solid',
          borderColor: item.border.borderColor,
          borderRadius: item.border.borderRadius + 'px',
          boxShadow:
            item.boxShadow != undefined
              ? `${item.boxShadow.width}px ${item.boxShadow.height}px ${item.boxShadow.blur}px ${item.boxShadow.stretching}px rgba(${item.boxShadow.colorRGB},${item.boxShadow.opacity})`
              : '',
          zIndex: item.position.zIndex,
        }"
      >
        <img
          v-if="item.photoBtn != undefined"
          :src="item.photoBtn"
          alt="photo"
          :style="{
            width: item.photo.width + 'px',
            height: item.photo.height + 'px',
            top: item.photo.top + 'px',
            left: item.photo.left + 'px',
          }"
        />
        <p
          v-if="lang == 'ru'"
          :style="{
            width: '100%',
            color: item.textColor,
            fontFamily: item.textFont,
            fontSize: item.textSize + 'px',
            lineHeight: item.textSize + 'px',
            fontWeight: item.fontWeight,
            fontStyle: item.fontStyle,
            textDecoration: item.textDecoration,
            textAlign: item.textAlign,
            top: item.textTop + 'px',
            left: item.textLeft + 'px',
          }"
        >
          {{ item.textRU }}
        </p>
        <!-- <pre>{{ item }}</pre> -->
        <p
          v-if="lang == 'uz'"
          :style="{
            width: '100%',
            color: item.textColor,
            fontFamily: item.textFont,
            fontSize: item.textSize + 'px',
            lineHeight: item.textSize + 'px',
            fontWeight: item.fontWeight,
            fontStyle: item.fontStyle,
            textDecoration: item.textDecoration,
            textAlign: item.textAlign,
            top: item.textTop + 'px',
            left: item.textLeft + 'px',
          }"
        >
          {{ item.textUZ }}
        </p>
        <p
          v-if="lang == 'en'"
          :style="{
            width: '100%',
            color: item.textColor,
            fontFamily: item.textFont,
            fontSize: item.textSize + 'px',
            lineHeight: item.textSize + 'px',
            fontWeight: item.fontWeight,
            fontStyle: item.fontStyle,
            textDecoration: item.textDecoration,
            textAlign: item.textAlign,
            top: item.textTop + 'px',
            left: item.textLeft + 'px',
          }"
        >
          {{ item.textEN }}
        </p>
        <p
          v-if="lang == 'oz'"
          :style="{
            width: '100%',
            color: item.textColor,
            fontFamily: item.textFont,
            fontSize: item.textSize + 'px',
            lineHeight: item.textSize + 'px',
            fontWeight: item.fontWeight,
            fontStyle: item.fontStyle,
            textDecoration: item.textDecoration,
            textAlign: item.textAlign,
            top: item.textTop + 'px',
            left: item.textLeft + 'px',
          }"
        >
          {{ item.textOZ }}
        </p>

        <p
          v-if="lang == 'ru' && item.waitingOnOff == true"
          :style="{
            width: '100%',
            color: item.textWaitingColor,
            fontFamily: item.textWaitingFont,
            fontSize: item.textWaitingSize + 'px',
            lineHeight: item.textWaitingSize + 'px',
            fontWeight: item.fontWaitingWeight,
            fontStyle: item.fontWaitingStyle,
            textDecoration: item.textWaitingDecoration,
            textAlign: item.textWaitingAlign,
            top: item.textWaitingTop + 'px',
            left: item.textWaitingLeft + 'px',
          }"
        >
          {{ item.textWaitingRU }} <span :id="item.servicesItem.Id">999</span>
        </p>
        <p
          v-if="lang == 'uz' && item.waitingOnOff == true"
          :style="{
            width: '100%',
            color: item.textWaitingColor,
            fontFamily: item.textWaitingFont,
            fontSize: item.textWaitingSize + 'px',
            lineHeight: item.textWaitingSize + 'px',
            fontWeight: item.fontWaitingWeight,
            fontStyle: item.fontWaitingStyle,
            textDecoration: item.textWaitingDecoration,
            textAlign: item.textWaitingAlign,
            top: item.textWaitingTop + 'px',
            left: item.textWaitingLeft + 'px',
          }"
        >
          {{ item.textWaitingUZ }} <span :id="item.servicesItem.Id">999</span>
        </p>
        <p
          v-if="lang == 'en' && item.waitingOnOff == true"
          :style="{
            width: '100%',
            color: item.textWaitingColor,
            fontFamily: item.textWaitingFont,
            fontSize: item.textWaitingSize + 'px',
            lineHeight: item.textWaitingSize + 'px',
            fontWeight: item.fontWaitingWeight,
            fontStyle: item.fontWaitingStyle,
            textDecoration: item.textWaitingDecoration,
            textAlign: item.textWaitingAlign,
            top: item.textWaitingTop + 'px',
            left: item.textWaitingLeft + 'px',
          }"
        >
          {{ item.textWaitingEN }} <span :id="item.servicesItem.Id">999</span>
        </p>
        <p
          v-if="lang == 'oz' && item.waitingOnOff == true"
          :style="{
            width: '100%',
            color: item.textWaitingColor,
            fontFamily: item.textWaitingFont,
            fontSize: item.textWaitingSize + 'px',
            lineHeight: item.textWaitingSize + 'px',
            fontWeight: item.fontWaitingWeight,
            fontStyle: item.fontWaitingStyle,
            textDecoration: item.textWaitingDecoration,
            textAlign: item.textWaitingAlign,
            top: item.textWaitingTop + 'px',
            left: item.textWaitingLeft + 'px',
          }"
        >
          {{ item.textWaitingOZ }} <span :id="item.servicesItem.Id">999</span>
        </p>
      </div>

      <!-- <div :id="item.id" @click="all(item)" v-if="item.parametr == 'btnAndPassword'" class="button" :style="{
        width: item.size.width + 'px',
        height: item.size.height + 'px',
        background: item.backColor,
        color: item.textColor,
        fontFamily: item.textFont,
        fontSize: item.textSize + 'px',
        lineHeight: item.textSize + 'px',
        fontWeight: item.fontWeight,
        fontStyle: item.fontStyle,
        textDecoration: item.textDecoration,
        textAlign: item.textAlign,
        borderWidth: item.border.borderWidth + 'px',
        borderStyle: 'solid',
        borderColor: item.border.borderColor,
        borderRadius: item.border.borderRadius + 'px',
        zIndex: item.position.zIndex
      }">
        <p v-if="lang == 'ru'" :style="{
          width: '100%',
          color: item.textColor,
          fontFamily: item.textFont,
          fontSize: item.textSize + 'px',
          lineHeight: item.textSize + 'px',
          fontWeight: item.fontWeight,
          fontStyle: item.fontStyle,
          textDecoration: item.textDecoration,
          textAlign: item.textAlign,
        }">{{ item.textRU }}</p>
        <p v-if="lang == 'uz'" :style="{
          width: '100%',
          color: item.textColor,
          fontFamily: item.textFont,
          fontSize: item.textSize + 'px',
          lineHeight: item.textSize + 'px',
          fontWeight: item.fontWeight,
          fontStyle: item.fontStyle,
          textDecoration: item.textDecoration,
          textAlign: item.textAlign,
        }">{{ item.textUZ }}</p>
        <p v-if="lang == 'en'" :style="{
          width: '100%',
          color: item.textColor,
          fontFamily: item.textFont,
          fontSize: item.textSize + 'px',
          lineHeight: item.textSize + 'px',
          fontWeight: item.fontWeight,
          fontStyle: item.fontStyle,
          textDecoration: item.textDecoration,
          textAlign: item.textAlign,
        }">{{ item.textEN }}</p>
        <p v-if="lang == 'oz'" :style="{
          width: '100%',
          color: item.textColor,
          fontFamily: item.textFont,
          fontSize: item.textSize + 'px',
          lineHeight: item.textSize + 'px',
          fontWeight: item.fontWeight,
          fontStyle: item.fontStyle,
          textDecoration: item.textDecoration,
          textAlign: item.textAlign,
        }">{{ item.textOZ }}</p>
      </div> -->

      <p
        :id="item.id"
        v-if="item.parametr == 'clock'"
        class="text clock"
        :style="{
          width: item.size.width + 'px',
          height: item.size.height + 'px',
          background: item.backColor,
          color: item.textColor,
          fontFamily: item.textFont,
          fontSize: item.textSize + 'px',
          lineHeight: item.lineHeight + 'px',
          fontWeight: item.fontWeight,
          fontStyle: item.fontStyle,
          textDecoration: item.textDecoration,
          margin: 0,
          textAlign: item.textAlign,
          boxShadow:
            item.boxShadow != undefined
              ? `${item.boxShadow.width}px ${item.boxShadow.height}px ${item.boxShadow.blur}px ${item.boxShadow.stretching}px rgba(${item.boxShadow.colorRGB},${item.boxShadow.opacity})`
              : '',
          zIndex: item.position.zIndex,
        }"
      >
        {{ item.text }}
      </p>

      <div
        v-if="item.parametr == 'progresbar'"
        class="progresbar"
        :style="{
          width: item.size.width + 'px',
          height: item.size.height + 'px',
          zIndex: item.position.zIndex,
        }"
      >
        <div
          id="bar"
          :style="{
            width: '0%',
            height: '100%',
            background: item.backColor,
            borderWidth: item.border.borderWidth + 'px',
            borderStyle: 'solid',
            borderColor: item.border.borderColor,
            boxShadow:
              item.boxShadow != undefined
                ? `${item.boxShadow.width}px ${item.boxShadow.height}px ${item.boxShadow.blur}px ${item.boxShadow.stretching}px rgba(${item.boxShadow.colorRGB},${item.boxShadow.opacity})`
                : '',
            borderRadius: item.border.borderRadius + 'px',
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "Print",
  data() {
    return {
      i: 0,
      lang: "ru",
      backProgres: "",
      // ticketNumber: "",
      time: "",
      settings: {},
    };
  },
  beforeMount() {
    this.settings = window.MY_SETINGS_TERMINAL_DESIGN;
    this.lang = this.$route.query.lang;
    
  },
  // created() {
  //   this.createNewTicket();
  // },
  mounted() {
    // this.getWaitingClientsCountForService()
    // const qwe = this.print.design.Page.map(item => item.parametr === 'text' ? item : '')
    // console.log(qwe)
    this.getGetAverageWaitTimeForServices();
    this.print.design.Page.find((item) => {
      if (item.parametr == "progresbar") this.time = item.timeProgresBar;
    });
    this.print.design.Page.find((item) => {
      if (item.parametr == "progresbar") {
        this.progres();
      }
    });
  },
  computed: {
    ...mapGetters({
      bodySize: "getPageSize",
      print: "getPagePrint",
      ticketNumber: "getTicketNumber",
      ticketWaitingTime: "getTicketWaitingTime"
    }),
  },
  beforeDestroy() {
    clearTimeout(this.backProgres);
    this.backProgres = null; // Сбросить идентификатор таймера
  },
  methods: {
    progres() {
      if (this.i == 0) {
        this.i = 1;
        const elem = document.getElementById("bar");
        let width = 0;
        let id = setInterval(function () {
          if (width >= 100) {
            clearInterval(id);
            this.i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
          }
        }, 5 * this.time);
      }

      this.backProgres = setTimeout(() => {
        this.$emit("printClose", false);
        this.$router
          .push({
            name: "pageNext",
            params: { id: this.settings.firstPage },
            query: {
              designId: this.$route.query.designId,
            },
          })
          .catch(() => {});
      }, this.time * 500);
    },
    getWaitingClientsCountForService() {
      this.resurs.design.Page.find((item) => {
        if (item.parametr == "btnAndPhoto" && item.servicesItem.Id != 0) {
          axios
            .get(
              `${this.settings.api}/GetWaitingClientsCountForService?ServiceId=${item.servicesItem.Id}`
            )
            .then((response) => {
              document.getElementById(item.id).querySelector("span").innerHTML =
                response.data;
            })
            .catch((e) => console.log(e));
        }
      });
    },
    createNewTicket() {
      if (this.$route.params.clerkId == "") {
        setTimeout(() => {
          axios
            .get(
              `${this.settings.api}/CreateNewTicket?ServiceId=${this.$route.params.serviceId}&TypeId=${this.$route.params.typeId}&Lang=${this.$route.query.lang}&PrintTicket=1`
            )
            .then((response) => {
              this.ticketNumber = response.data.task.TicketPrefix + response.data.task.TicketNumber
              // this.ticketNumber = response.data.task.TicketPrefix + response.data.task.TicketNumber
              // console.log(response.data.task.TicketPrefix + response.data.task.TicketNumber);
              if (response.data.Code < 0) {
                this.$toast.warning(response.data.Msg);
              }
            })
            .catch((error) => console.log(error))
            .finally(() => {});
        }, 200);
      } else {
        setTimeout(() => {
          axios
            .get(
              `${this.settings.api}/CreateNewTicket?ServiceId=${this.$route.params.serviceId}&ClerkId=${this.$route.params.clerkId}&TypeId=${this.$route.params.typeId}&Lang=${this.$route.query.lang}&PrintTicket=1`
            )
            .then((response) => {
              this.ticketNumber = response.data.task.TicketPrefix + response.data.task.TicketNumber
              // this.ticketNumber = response.data.task.TicketPrefix + response.data.task.TicketNumber
              if (response.data.Code < 0) {
                this.$toast.warning(response.data.Msg);
              }
            })
            .catch((error) => console.log(error))
            .finally(() => {});
        }, 200);
      }
    },
    getGetAverageWaitTimeForServices() {
      axios
        .get(`${this.settings.api}/GetAverageWaitTimeForServices`)
        .then((res) => console.log(res, 123));
    },
    all(options) {
      switch (options.dealings) {
        case 1: //getBookedTicket
          document.getElementById(options.id).style.transform = "scale(0.9)";
          setTimeout(() => {
            document.getElementById(options.id).style.transform = "scale(1)";
          }, 100);
          setTimeout(() => {
            // this.print = true;
            axios
              .get(
                `${this.settings.api}/GetBookedTicket?code=${this.numpadText}`
              )
              .then((response) => {
                if (response.data.Code == -1) {
                  this.$toast.error(response.data.Msg);
                } else {
                  this.infoBooking = response.data;
                }
              })
              .catch((error) => console.log(error));
          }, 200);
          break;
        case 2: //goToPageEvent
          this.cancelTimeout();
          document.getElementById(options.id).style.transform = "scale(0.9)";
          setTimeout(() => {
            document.getElementById(options.id).style.transform = "scale(1)";
          }, 100);
          setTimeout(() => {
            this.$router
              .push({
                name: "pageNext",
                params: { id: options.nextPage, serviceId: options.id },
                query: {
                  designId: this.$route.query.designId,
                },
              })
              .catch(() => {});
            // setTimeout(() => {
            //   this.getClerks()
            //   this.getWaitingClientsCountForService()
            // }, 50)

            this.$store.dispatch("AC_NEXT_PAGE", options.nextPage);
          }, 200);
          break;
        case 3: //historyBackEvent
          this.cancelTimeout();
          document.getElementById(options.id).style.transform = "scale(0.9)";
          setTimeout(() => {
            document.getElementById(options.id).style.transform = "scale(1)";
          }, 100);
          setTimeout(() => {
            this.$router.go(-1);
          }, 200);
          // this.$router.push({ name: 'nextPage', params: { id: options.nextPage } })
          // this.$store.dispatch('actNextPage', options.goToPageEvent.id)
          // mapGetters({resurs: "getPage"})
          break;
        case 4: //changeLanguageEventRu
          // console.log(options);
          document.getElementById(options.id).style.transform = "scale(0.9)";
          setTimeout(() => {
            document.getElementById(options.id).style.transform = "scale(1)";
          }, 100);
          setTimeout(() => {
            this.lang = "ru";
            localStorage.setItem("lang", "ru");
          }, 200);
          break;
        case 5: //changeLanguageEventUZ
          document.getElementById(options.id).style.transform = "scale(0.9)";
          setTimeout(() => {
            document.getElementById(options.id).style.transform = "scale(1)";
          }, 100);
          setTimeout(() => {
            this.lang = "uz";
            localStorage.setItem("lang", "uz");
          }, 200);
          break;
        case 6: //changeLanguageEventEN
          document.getElementById(options.id).style.transform = "scale(0.9)";
          setTimeout(() => {
            document.getElementById(options.id).style.transform = "scale(1)";
          }, 100);
          setTimeout(() => {
            this.lang = "en";
            localStorage.setItem("lang", "en");
          }, 200);
          break;
        case 7: //goToPrintingPageEvent
          this.cancelTimeout();
          this.$store.dispatch(
            "AC_PRINT_NEXT_PAGE",
            options.printItem.PrintPageName
          );

          document.getElementById(options.id).style.transform = "scale(0.9)";
          setTimeout(() => {
            document.getElementById(options.id).style.transform = "scale(1)";
          }, 100);

          setTimeout(() => {
            this.$router
              .push({
                name: "Print",
                params: {
                  id: options.printItem.PrintPageName,
                  typeId: 1,
                  serviceId: options.servicesItem.Id,
                  clerkId: "",
                },
                query: {
                  designId: this.$route.query.designId,
                  lang: this.lang,
                },
              })
              .catch(() => {});
          }, 200);
          break;
        case 9: //VIP
          document.getElementById(options.id).style.transform = "scale(0.9)";
          setTimeout(() => {
            document.getElementById(options.id).style.transform = "scale(1)";
          }, 100);
          this.passwordModal = true;
          this.passwordModalInput = options.password;
          this.serviceId = options.servicesItem.Id;
          this.printPageName = options.printItem.printPageName;
          break;
        case 10: //changeLanguageEventOZ
          document.getElementById(options.id).style.transform = "scale(0.9)";
          setTimeout(() => {
            document.getElementById(options.id).style.transform = "scale(1)";
          }, 200);
          this.lang = "oz";
          localStorage.setItem("lang", "oz");
          break;
        case 11: //goToPrintingPageEventAndLanguage
          this.cancelTimeout();
          this.$store.dispatch(
            "AC_PRINT_NEXT_PAGE",
            options.printItem.PrintPageName
          );
          document.getElementById(options.id).style.transform = "scale(0.9)";
          setTimeout(() => {
            document.getElementById(options.id).style.transform = "scale(1)";
          }, 100);

          setTimeout(() => {
            this.$router
              .push({
                name: "Print",
                params: {
                  id: options.printItem.PrintPageName,
                  typeId: 1,
                  serviceId: options.servicesItem.Id,
                  clerkId: "",
                },
                query: {
                  designId: this.$route.query.designId,
                  lang: this.lang,
                },
              })
              .catch(() => {});
          }, 200);
          break;
        case 12: //goToPageEventAndLanguage
          this.cancelTimeout();
          document.getElementById(options.id).style.transform = "scale(0.9)";
          setTimeout(() => {
            document.getElementById(options.id).style.transform = "scale(1)";
          }, 100);
          setTimeout(() => {
            this.lang = options.language;
            localStorage.setItem("lang", options.language);

            this.$router
              .push({
                name: "pageNext",
                params: { id: options.nextPage, serviceId: options.id },
                query: {
                  designId: this.$route.query.designId,
                },
              })
              .catch(() => {});
            // setTimeout(() => {
            //   this.getClerks()
            //   this.getWaitingClientsCountForService()
            // }, 50)

            this.$store.dispatch("AC_NEXT_PAGE", options.nextPage);
          }, 300);
          break;
        case 13: //goToPrintingPageEventVip
          this.cancelTimeout();
          this.$store.dispatch(
            "AC_PRINT_NEXT_PAGE",
            options.printItem.PrintPageName
          );
          document.getElementById(options.id).style.transform = "scale(0.9)";
          setTimeout(() => {
            document.getElementById(options.id).style.transform = "scale(1)";
          }, 100);

          setTimeout(() => {
            this.$router
              .push({
                name: "Print",
                params: {
                  id: options.printItem.PrintPageName,
                  typeId: 4,
                  serviceId: options.servicesItem.Id,
                  clerkId: "",
                },
                query: {
                  designId: this.$route.query.designId,
                  lang: this.lang,
                },
              })
              .catch(() => {});
          }, 200);
          break;
      }
    },
    cancelTimeout() {
      if (this.backProgres) {
        clearTimeout(this.backProgres);
        this.backProgres = null; // Сбросить идентификатор таймера
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.print {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  padding: 50px;

  .info {
    .title {
      font-family: "Roboto";
      font-weight: 500;
      font-size: 36px;
      line-height: 36px;
      color: #000;
      margin-bottom: 100px;
      padding: 0 70px;
      text-align: center;
    }
  }

  .progres-bar {
    position: absolute;
    // width: 100%;
    // // background-color: #fff;
    // #bar {
    //   width: 0%;
    //   height: 100px;
    //   background-color: #000;
    // }
  }

  #bar {
    transition: width 0.1s ease;
  }

  //.bg {
  //  position: absolute;
  //  top: 0;
  //  left: 0;
  //  width: 100%;
  //  height: 100%;
  //}
}
</style>
