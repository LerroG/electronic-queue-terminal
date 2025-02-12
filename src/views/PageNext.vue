<template>
  <div
    v-if="resurs != undefined"
    class="center"
    :style="{
      width: bodySize.bodyWidth + 'px',
      height: bodySize.bodyHeight + 'px',
    }"
  >
    <img
      v-if="resurs.design.PageBackground.Image != ''"
      class="center__bg"
      :src="resurs.design.PageBackground.Image"
      alt="Photo"
    />
    <div
      v-else-if="resurs.design.PageBackground.Color != ''"
      class="center__bg-color"
      :style="{
        background: resurs.design.PageBackground.Color,
      }"
    ></div>
    <div
      v-for="item in resurs.design.Page"
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
          lineHeight: item.lineHeight + 'px',
          fontWeight: item.fontWeight,
          fontStyle: item.fontStyle,
          textDecoration: item.textDecoration,
          textAlign: item.textAlign,
          borderWidth: item.border.borderWidth + 'px',
          borderStyle: 'solid',
          borderColor: item.border.borderColor,
          borderRadius: item.border.borderRadius + 'px',
          zIndex: item.position.zIndex,
          padding: item.padding
            ? `${item.padding.top}px ${item.padding.right}px ${item.padding.bottom}px ${item.padding.left}px`
            : '',
          boxShadow:
            item.boxShadow != undefined
              ? `${item.boxShadow.width}px ${item.boxShadow.height}px ${item.boxShadow.blur}px ${item.boxShadow.stretching}px rgba(${item.boxShadow.colorRGB},${item.boxShadow.opacity})`
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
            lineHeight: item.lineHeight + 'px',
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
            lineHeight: item.lineHeight + 'px',
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
            lineHeight: item.lineHeight + 'px',
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
            lineHeight: item.lineHeight + 'px',
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
        v-if="item.parametr == 'text' && lang == 'ru'"
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
        v-if="item.parametr == 'text' && lang == 'uz'"
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
        v-if="item.parametr == 'text' && lang == 'en'"
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
        v-if="item.parametr == 'text' && lang == 'oz'"
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
        :src="item.urlImage[lang]"
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

      <div
        v-if="item.parametr == 'numpad'"
        class="numpad"
        :style="{
          width: 'auto',
          height: 'auto',
          zIndex: item.position.zIndex,
        }"
      >
        <input
          type="text"
          v-model="numpadText"
          :style="{
            textAlign: 'center',
            color: item.textColor,
            width: item.size.width + 'px',
            height: 'auto',
            fontFamily: item.textFont,
            fontSize: item.textSize + 'px',
            fontWeight: item.fontWeight,
            borderWidth: item.border.borderWidth + 'px',
            borderStyle: 'solid',
            borderColor: item.border.borderColor,
            borderRadius: item.border.borderRadius + 'px',
          }"
        />
        <div
          class="number"
          :style="{
            width: item.size.numpadWidth + 'px',
            height: 'auto',
          }"
        >
          <button
            v-for="index in 9"
            :key="index"
            class="number__item"
            @click="numbad(index)"
            :style="{
              width: item.size.buttonWidth + 'px',
              height: item.size.buttonHeight + 'px',
              backgroundColor: item.numpadBgButton,
              borderRadius: item.numpadButtonRadius + 'px',
              color: item.numpadTextColor,
              borderColor: item.numpadBorderButton,
              fontWeight: item.numpadButtonFontWeight,
              fontSize: item.numpadButtonTextSize + 'px',
              fontFamily: item.numpadButtonTextFont,
            }"
          >
            {{ index }}
          </button>
          <button
            class="number__item"
            @click="numbad('c')"
            :style="{
              width: item.size.buttonWidth + 'px',
              height: item.size.buttonHeight + 'px',
              backgroundColor: item.numpadBgButton,
              borderRadius: item.numpadButtonRadius + 'px',
              color: item.numpadTextColor,
              borderColor: item.numpadBorderButton,
              fontWeight: item.numpadButtonFontWeight,
              fontSize: item.numpadButtonTextSize + 'px',
              fontFamily: item.numpadButtonTextFont,
            }"
          >
            C
          </button>
          <button
            class="number__item"
            @click="numbad(0)"
            :style="{
              width: item.size.buttonWidth + 'px',
              height: item.size.buttonHeight + 'px',
              backgroundColor: item.numpadBgButton,
              borderRadius: item.numpadButtonRadius + 'px',
              color: item.numpadTextColor,
              borderColor: item.numpadBorderButton,
              fontWeight: item.numpadButtonFontWeight,
              fontSize: item.numpadButtonTextSize + 'px',
              fontFamily: item.numpadButtonTextFont,
            }"
          >
            0
          </button>
          <button
            class="number__item"
            @click="numbad('backspace')"
            :style="{
              width: item.size.buttonWidth + 'px',
              height: item.size.buttonHeight + 'px',
              backgroundColor: item.numpadBgButton,
              borderRadius: item.numpadButtonRadius + 'px',
              color: item.numpadTextColor,
              borderColor: item.numpadBorderButton,
              fontWeight: item.numpadButtonFontWeight,
              fontSize: item.numpadButtonTextSize + 'px',
              fontFamily: item.numpadButtonTextFont,
            }"
          >
            ⌫
          </button>
        </div>
      </div>

      <div
        v-if="item.parametr == 'selection'"
        class="selection"
        :style="{
          width: item.size.width + 'px',
          height: item.size.height + 'px',
          gridColumnGap: item.columnGap + 'px',
          gridRowGap: item.rowGap + 'px',
          overflowY: 'auto',
        }"
      >
        <!-- display: 'none', -->
        <div
          v-for="index in item.countBtn"
          :key="index"
          :id="'s' + index"
          @click="allSelectFunciton(item, 'Clerk', index)"
          class="selection__item"
          :style="{
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
            transform: 'scale(1)',
          }"
        >
          <img
            src="/design/img/pl.jpg"
            alt="photo"
            :style="{
              width: item.photo.width + 'px',
              height: item.photo.height + 'px',
              top: item.photo.top + 'px',
              left: item.photo.left + 'px',
            }"
          />
          <p
            :id="'t' + index"
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
            {{ item.text }}
          </p>
          <p
            :id="'clerkInDeskName' + index"
            :style="{
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
            }"
          >
            {{ item.text }}
          </p>
          <p
            :id="'clerkClientsCount' + index"
            :style="{
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
            }"
          >
            {{ item.text }}
          </p>
        </div>
      </div>

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

      <div
        :id="item.id"
        @click="all(item)"
        v-if="item.parametr == 'btnAndPassword'"
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
          boxShadow:
            item.boxShadow != undefined
              ? `${item.boxShadow.width}px ${item.boxShadow.height}px ${item.boxShadow.blur}px ${item.boxShadow.stretching}px rgba(${item.boxShadow.colorRGB},${item.boxShadow.opacity})`
              : '',
          zIndex: item.position.zIndex,
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
    </div>
    <!-- <Print v-if="print == true" :info="infoBooking" @printClose="printClose($event)"/> -->
    <!-- <Print v-if="print == true" :info="infoBooking" :time="timeProgresBar" :lang="lang" @printClose="printClose($event)"/> -->
    <div v-if="errorModal" class="errorModal">
      <p>{{ errorText }}</p>
    </div>
    <div v-if="passwordModal" class="passwordModal">
      <i
        @click="passwordModalClose()"
        class="fa fa-times"
        aria-hidden="true"
      ></i>
      <div class="numpad">
        <input type="text" v-model="password" />
        <div class="number">
          <button
            v-for="index in 9"
            :key="index"
            class="number__item"
            @click="numbadElem(index)"
          >
            {{ index }}
          </button>
          <button class="number__item" @click="numbadElem('c')">C</button>
          <button class="number__item" @click="numbadElem(0)">0</button>
          <button class="number__item" @click="numbadElem('backspace')">
            ⌫
          </button>
        </div>
        <div @click="printVip()" class="btn">Печать</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      idElement: 0,
      isActive: "",
      isTabs: 2,
      isParam: 1,
      isAlert: false,
      lang: "ru",
      numpadText: "",
      pageId: "",
      bodyWidth: "",
      bodyHeight: "",
      settings: {},
      info: [],
      infoBooking: [],
      infoClerks: [],
      timeProgresBar: 0,
      errorModal: false,
      errorText: "",
      passwordModal: false,
      passwordModalInput: "",
      password: "",
      serviceId: "",
      printPageName: "",
      t: "",
    };
  },
  beforeMount() {
    this.settings = window.MY_SETINGS_TERMINAL_DESIGN;
    this.updateMessage();
  },
  mounted() {
    // console.log(this.$route.params.id)
    this.$emit("updateLoading");
    setInterval(() => {
      const clockElement = document.querySelector(".clock");
      // Проверяем, найден ли элемент
      if (clockElement) {
        let currentDate = new Date();
        let hours = currentDate.getHours().toString().padStart(2, "0"); // Получаем часы и добавляем ведущий ноль при необходимости
        let minutes = currentDate.getMinutes().toString().padStart(2, "0"); // Получаем минуты и добавляем ведущий ноль при необходимости
        let seconds = currentDate.getSeconds().toString().padStart(2, "0");
        // Устанавливаем новый текст
        clockElement.textContent = hours + ":" + minutes + ":" + seconds;
      }
    }, 1000);

    this.lang = window.MY_SETINGS_TERMINAL_DESIGN.lang;

    // setTimeout(() => {
    //   this.getWaitingClientsCountForService()
    // }, 6000)
  },
  beforeCreate() {
    this.$store.dispatch("AC_NEXT_PAGE", this.$route.params.id);
  },
  created() {
    setInterval(() => {
      this.pageId = this.$route.params.id;
    }, 100);
  },
  beforeDestroy() {
    clearTimeout(this.t);
  },
  computed: {
    ...mapGetters({
      bodySize: "getPageSize",
      resurs: "getPage",
      printPage: "getPagePrint",
      // infoClerks: "getClerks",
    }),
    // arrayClerks() {
    //   return this.infoClerks = this.getClerks;
    // }
  },
  methods: {
    async createNewTicket(clerkId, serviceId, typeId) {
      try {
        // Формирование URL для первого запроса (создание билета)
        const ticketUrl = clerkId
          ? `${this.settings.api}/CreateNewTicket?ServiceId=${serviceId}&ClerkId=${clerkId}&TypeId=${typeId}&Lang=${this.lang}&PrintTicket=1`
          : `${this.settings.api}/CreateNewTicket?ServiceId=${serviceId}&TypeId=${typeId}&Lang=${this.lang}&PrintTicket=1`;

        // Формирование URL для второго запроса (получение времени ожидания)
        const waitTimeUrl = `${this.settings.api}/GetAverageWaitTimeForServices`;

        // Добавление небольшой задержки перед запросом
        await new Promise((resolve) => setTimeout(resolve, 200));

        // Выполнение обоих запросов параллельно
        const [ticketResponse, waitTimeResponse] = await Promise.all([
          axios.get(ticketUrl), // Запрос для создания билета
          axios.get(waitTimeUrl), // Запрос для получения времени ожидания
        ]);

        // Обработка результата запроса на создание билета
        this.$store.dispatch(
          "AC_TICKET_NUMBER",
          ticketResponse.data.task.TicketPrefix +
            ticketResponse.data.task.TicketNumber
        );

        if (ticketResponse.data.Code < 0) {
          this.$toast.warning(ticketResponse.data.Msg);
          throw new Error(ticketResponse.data.Msg); // Генерация ошибки для отклонения promise
        }

        // Поиск времени ожидания для конкретного serviceId
        const serviceWaitTime = waitTimeResponse.data.find(
          (item) => item.serviceId === serviceId
        );

        this.$store.dispatch(
          "AC_TICKET_WAITING_TIME",
          serviceWaitTime ? serviceWaitTime.waitTime : null
        );
        console.log(serviceWaitTime.waitTime);
        // Возвращаем оба ответа, но только waitTime для нужного serviceId
        return {
          ticketResponse,
          waitTime: serviceWaitTime ? serviceWaitTime.waitTime : null,
        };
      } catch (error) {
        console.error(error);
        throw error; // Отклоняем promise в случае ошибки
      }
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
                `${this.settings.api}/GetBookedTicket?code=${this.numpadText}&printTicket=1`
              )
              .then((response) => {
                if (response.data.Code == -1) {
                  this.$toast.error(response.data.Msg);
                } else {
                  this.infoBooking = response.data;
                  this.$router.go(-1);
                }
              })
              .catch((error) => console.log(error));
          }, 200);
          break;
        case 2: //goToPageEvent
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
            setTimeout(() => {
              this.getClerks();
              this.getWaitingClientsCountForService();
            }, 50);

            this.$store.dispatch("AC_NEXT_PAGE", options.nextPage);
          }, 200);
          break;
        case 3: //historyBackEvent
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
          this.$store.dispatch(
            "AC_PRINT_NEXT_PAGE",
            options.printItem.PrintPageName
          );

          document.getElementById(options.id).style.transform = "scale(0.9)";
          setTimeout(() => {
            document.getElementById(options.id).style.transform = "scale(1)";
          }, 100);

          setTimeout(() => {
            this.createNewTicket("", options.servicesItem.Id, 1).then(() => {
              this.$router.push({
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
              });
            });
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
          this.$store.dispatch(
            "AC_PRINT_NEXT_PAGE",
            options.printItem.PrintPageName
          );
          document.getElementById(options.id).style.transform = "scale(0.9)";
          setTimeout(() => {
            document.getElementById(options.id).style.transform = "scale(1)";
          }, 100);

          setTimeout(() => {
            this.createNewTicket("", options.servicesItem.Id, 1).then(() => {
              this.$router.push({
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
              });
            });
          }, 200);
          break;
        case 12: //goToPageEventAndLanguage
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
            setTimeout(() => {
              this.getClerks();
              this.getWaitingClientsCountForService();
            }, 50);

            this.$store.dispatch("AC_NEXT_PAGE", options.nextPage);
          }, 300);
          break;
        case 13: //goToPrintingPageEventVip
          this.$store.dispatch(
            "AC_PRINT_NEXT_PAGE",
            options.printItem.PrintPageName
          );
          document.getElementById(options.id).style.transform = "scale(0.9)";
          setTimeout(() => {
            document.getElementById(options.id).style.transform = "scale(1)";
          }, 100);

          setTimeout(() => {
            this.createNewTicket("", options.servicesItem.Id, 4).then(() => {
              this.$router.push({
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
              });
            });
          }, 200);
          break;
      }
    },
    allSelectFunciton(options, params, paramsIndex) {
      switch (options.dealings) {
        case 1: //getBookedTicket
          document.getElementById(options.id).style.transform = "scale(0.9)";
          setTimeout(() => {
            document.getElementById(options.id).style.transform = "scale(1)";
          }, 200);
          // this.print = true;
          axios
            .get(
              `${this.settings.api}/GetBookedTicket?code=${this.numpadText}&printTicket=1`
            )
            .then((response) => {
              if (response.data.Code == -1) {
                this.$toast.error(response.data.Msg);
              } else {
                this.infoBooking = response.data;
                this.$router.go(-1);
              }
            })
            .catch((error) => console.log(error));
          break;
        case 2: //goToPageEvent
          document.getElementById(options.id).style.transform = "scale(0.9)";
          setTimeout(() => {
            document.getElementById(options.id).style.transform = "scale(1)";
          }, 200);
          this.$router
            .push({
              name: "pageNext",
              params: { id: options.nextPage },
              query: {
                designId: this.$route.query.designId,
              },
            })
            .catch(() => {});
          this.$store.dispatch("AC_NEXT_PAGE", options.nextPage);
          break;
        case 3: //historyBackEvent
          document.getElementById(options.id).style.transform = "scale(0.9)";
          setTimeout(() => {
            document.getElementById(options.id).style.transform = "scale(1)";
          }, 200);
          this.$router.go(-1);
          // this.$router.push({ name: 'nextPage', params: { id: options.nextPage } })
          // this.$store.dispatch('actNextPage', options.goToPageEvent.id)
          // mapGetters({resurs: "getPage"})
          break;
        case 4: //changeLanguageEventRu
          document.getElementById(options.id).style.transform = "scale(0.9)";
          setTimeout(() => {
            document.getElementById(options.id).style.transform = "scale(1)";
          }, 200);
          this.lang = "ru";
          localStorage.setItem("lang", "ru");
          break;
        case 5: //changeLanguageEventUZ
          document.getElementById(options.id).style.transform = "scale(0.9)";
          setTimeout(() => {
            document.getElementById(options.id).style.transform = "scale(1)";
          }, 200);
          this.lang = "uz";
          localStorage.setItem("lang", "uz");
          break;
        case 6: //changeLanguageEventEN
          document.getElementById(options.id).style.transform = "scale(0.9)";
          setTimeout(() => {
            document.getElementById(options.id).style.transform = "scale(1)";
          }, 200);
          this.lang = "en";
          localStorage.setItem("lang", "en");
          break;
        case 7: //goToPrintingPageEvent
          this.$store.dispatch(
            "AC_PRINT_NEXT_PAGE",
            options.printItem.PrintPageName
          );
          // console.log(document.getElementById(`s${paramsIndex}`).style.transform);
          document.getElementById(`s${paramsIndex}`).style.transform =
            "scale(0.9)";
          document.getElementById(`s${paramsIndex}`).style.transform =
            "scale(1)";
          setTimeout(() => {}, 1000);
          // this.print = true;
          if (params == "Clerk") {
            let ClerkId = this.infoClerks[paramsIndex - 1].ClerkId;
            this.createNewTicket(ClerkId, options.servicesItem.Id, 1).then(
              () => {
                this.$router.push({
                  name: "Print",
                  params: {
                    id: options.printItem.PrintPageName,
                    typeId: 1,
                    serviceId: options.servicesItem.Id,
                    clerkId: ClerkId,
                  },
                  query: {
                    designId: this.$route.query.designId,
                    lang: this.lang,
                  },
                });
              }
            );
          } else if (params == "Service") {
            this.createNewTicket("", options.servicesItem.Id, 1).then(() => {
              this.$router.push({
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
              });
            });
          }
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
          this.$store.dispatch(
            "AC_PRINT_NEXT_PAGE",
            options.printItem.PrintPageName
          );
          document.getElementById(options.id).style.transform = "scale(0.9)";
          setTimeout(() => {
            document.getElementById(options.id).style.transform = "scale(1)";
          }, 100);

          setTimeout(() => {
            this.createNewTicket("", options.servicesItem.Id, 1).then(() => {
              this.$router.push({
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
              });
            });
          }, 200);
          break;
        case 12: //goToPageEventAndLanguage
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
            setTimeout(() => {
              this.getClerks();
              this.getWaitingClientsCountForService();
            }, 50);

            this.$store.dispatch("AC_NEXT_PAGE", options.nextPage);
          }, 300);
          break;
        case 13: //goToPrintingPageEventVip
          this.$store.dispatch(
            "AC_PRINT_NEXT_PAGE",
            options.printItem.PrintPageName
          );
          document.getElementById(options.id).style.transform = "scale(0.9)";
          setTimeout(() => {
            document.getElementById(options.id).style.transform = "scale(1)";
          }, 100);

          setTimeout(() => {
            this.createNewTicket("", options.servicesItem.Id, 1).then(() => {
              this.$router.push({
                name: "Print",
                params: {
                  id: this.printPageName,
                  typeId: 1,
                  serviceId: options.servicesItem.Id,
                  clerkId: "",
                },
                query: {
                  designId: this.$route.query.designId,
                  lang: this.lang,
                },
              });
            });
          }, 200);
          break;
      }
    },
    numbad(button) {
      if (button == "c") {
        this.numpadText = "";
      } else if (button == "backspace") {
        this.numpadText = this.numpadText.slice(0, -1);
      } else {
        this.numpadText = this.numpadText + button.toString();
      }
    },
    numbadElem(elem) {
      if (elem === "c") {
        this.password = "";
      } else if (elem === "backspace") {
        this.password = this.password.substring(0, this.password.length - 1);
      } else {
        this.password += elem;
      }
    },
    updateMessage() {
      if (this.$store.getters.getPage == undefined) {
        this.$router
          .push({
            name: "page",
            query: {
              designId: this.$route.query.designId,
            },
          })
          .catch(() => {});
      }
    },
    printClose(data) {
      // console.log(data);
      // this.print = data;
      this.$router
        .push({
          name: "pageNext",
          params: { id: this.settings.firstPage, ticketInfo: data },
          query: {
            designId: this.$route.query.designId,
          },
        })
        .catch(() => {});
      this.$store.dispatch("AC_NEXT_PAGE", this.settings.firstPage);
    },
    printVip() {
      if (this.passwordModalInput == this.password) {
        this.passwordModal = false;
        // this.print = true;
        this.createNewTicket("", this.serviceId, 2).then(() => {
          this.$router.push({
            name: "Print",
            params: {
              id: this.printPageName,
              typeId: 2,
              serviceId: this.serviceId,
              clerkId: "",
            },
            query: {
              designId: this.$route.query.designId,
              lang: this.lang,
            },
          });
        });

        this.password = "";
        this.serviceId = "";
      }
    },
    passwordModalClose() {
      this.passwordModal = false;
      this.password = "";
      this.serviceId = "";
    },
    getClerks() {
      const count = document.querySelectorAll(".selection__item").length;

      axios
        .get(
          `${this.settings.api}/GetClerksByServiceName?serviceName=${this.$route.params.id}`
        )
        .then((response) => {
          // console.log(response.data.Design);
          this.infoClerks = response.data;
          for (let index = 0; index < count; index++) {
            // console.log(index+1);
            // console.log(response.data[index].NameInReport);
            // console.log(response.data[index].NameInReport);
            document.getElementById(`t${index + 1}`).innerHTML =
              response.data[index].ClerkName;
            document.getElementById(`clerkInDeskName${index + 1}`).innerHTML =
              response.data[index].ClerkInDeskName;
            document.getElementById(`clerkClientsCount${index + 1}`).innerHTML =
              this.lang == "uz"
                ? "Navbatdagi odamlar soni: " +
                  response.data[index].ClerkClientsCount
                : this.lang == "en"
                ? "Number of people in the queue: " +
                  response.data[index].ClerkClientsCount
                : this.lang == "ru"
                ? "Количество людей в очереди: " +
                  response.data[index].ClerkClientsCount
                : "Навбатдаги одамлар сони";
            if (response.data[index].ClerkPhoto != "") {
              document
                .getElementById(`s${index + 1}`)
                .querySelector("img").src = response.data[index].ClerkPhoto;
            }
            document.getElementById(`s${index + 1}`).style.display = "block";
            let count = index + 1;
            if (count == response.data.length) break;

            // console.log(index);
          }
          // this.$store.dispatch('AC_CLERKS', response.data);
        })
        .catch((e) => console.log(e));
    },
    getWaitingClientsCountForService() {
      // console.log(this.resurs)

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
  },
  watch: {
    pageId() {
      this.$store.dispatch("AC_NEXT_PAGE", this.$route.params.id);
    },
    resurs(newVal) {
      if (newVal) this.getWaitingClientsCountForService();
    },
    "$route.params.id"() {
      // clearTimeout(this.t);
      // this.t = setTimeout(() => {
      //   if(this.$route.params.id != 1) {
      //     this.$router.push({
      //       name: 'pageNext',
      //       params: { id: this.settings.firstPage },
      //       query: {
      //         designId: this.$route.query.designId
      //       }
      //     }).catch(()=>{});
      //   }
      // }, this.settings.timeBackPage * 1000);
    },
    // errorModal() {
    //   // if(this.errorModal == true) {
    //   //   setTimeout(() => {
    //   //     this.errorModal = false;
    //   //   }, 5000);
    //   // }
    // },
  },
};
</script>

<style lang="scss" scoped>
.center {
  position: relative;
  margin: 0 auto;
  background-size: cover;

  .item {
    &:focus-visible {
      outline: none;
    }
  }

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &-color {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .box {
    position: absolute;
  }

  .selection {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      // position: absolute;
      cursor: pointer;
      text-align: center;
      white-space: normal;
      position: relative;

      &:nth-child(1) {
        grid-area: 1 / 1 / 2 / 2;
      }

      &:nth-child(2) {
        grid-area: 1 / 2 / 2 / 3;
      }

      &:nth-child(3) {
        grid-area: 2 / 1 / 3 / 2;
      }

      &:nth-child(4) {
        grid-area: 2 / 2 / 3 / 3;
      }

      &:nth-child(5) {
        grid-area: 3 / 1 / 4 / 2;
      }

      &:nth-child(6) {
        grid-area: 3 / 2 / 4 / 3;
      }

      &:nth-child(7) {
        grid-area: 4 / 1 / 5 / 2;
      }

      &:nth-child(8) {
        grid-area: 4 / 2 / 5 / 3;
      }

      &:nth-child(9) {
        grid-area: 5 / 1 / 6 / 2;
      }

      &:nth-child(10) {
        grid-area: 5 / 2 / 6 / 3;
      }

      &:nth-child(11) {
        grid-area: 6 / 1 / 7 / 2;
      }

      &:nth-child(12) {
        grid-area: 6 / 2 / 7 / 3;
      }

      &:nth-child(13) {
        grid-area: 7 / 1 / 8 / 2;
      }

      &:nth-child(14) {
        grid-area: 7 / 2 / 8 / 3;
      }

      &:nth-child(15) {
        grid-area: 8 / 1 / 9 / 2;
      }

      &:nth-child(16) {
        grid-area: 8 / 2 / 9 / 3;
      }

      &:nth-child(17) {
        grid-area: 9 / 1 / 10 / 2;
      }

      &:nth-child(18) {
        grid-area: 9 / 2 / 10 / 3;
      }

      &:nth-child(19) {
        grid-area: 10 / 1 / 11 / 2;
      }

      &:nth-child(20) {
        grid-area: 10 / 2 / 11 / 3;
      }

      &:nth-child(21) {
        grid-area: 11 / 1 / 12 / 2;
      }

      &:nth-child(22) {
        grid-area: 11 / 2 / 12 / 3;
      }

      &:nth-child(23) {
        grid-area: 12 / 1 / 13 / 2;
      }

      &:nth-child(24) {
        grid-area: 12 / 2 / 13 / 3;
      }

      &:nth-child(24) {
        grid-area: 13 / 1 / 14 / 2;
      }

      &:nth-child(25) {
        grid-area: 13 / 2 / 14 / 3;
      }

      &:nth-child(26) {
        grid-area: 14 / 1 / 15 / 2;
      }

      &:nth-child(27) {
        grid-area: 14 / 2 / 15 / 3;
      }

      &:nth-child(28) {
        grid-area: 15 / 1 / 16 / 2;
      }

      &:nth-child(29) {
        grid-area: 15 / 2 / 16 / 3;
      }

      &:nth-child(30) {
        grid-area: 16 / 1 / 17 / 2;
      }

      &:nth-child(31) {
        grid-area: 16 / 2 / 17 / 3;
      }

      &:nth-child(32) {
        grid-area: 17 / 1 / 18 / 2;
      }

      &:nth-child(33) {
        grid-area: 17 / 2 / 18 / 3;
      }

      &:nth-child(34) {
        grid-area: 18 / 1 / 19 / 2;
      }

      &:nth-child(35) {
        grid-area: 18 / 2 / 19 / 3;
      }

      &:nth-child(36) {
        grid-area: 19 / 1 / 20 / 2;
      }

      &:nth-child(37) {
        grid-area: 19 / 2 / 20 / 3;
      }

      &:nth-child(38) {
        grid-area: 20 / 1 / 21 / 2;
      }

      &:nth-child(39) {
        grid-area: 20 / 2 / 21 / 3;
      }

      p {
        position: absolute;
      }

      img {
        position: absolute;
      }
    }

    .active-false {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000 !important;
      z-index: 3 !important;
    }
  }

  .btnAndPhoto {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-align: center;
    white-space: normal;
    position: relative;
    transition: 0.2s all ease-in-out;
    outline: none;

    p {
      position: absolute;
    }

    img {
      position: absolute;
    }
  }

  .errorModal {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    position: relative;
    // top: 0;
    // left: 0;
    z-index: 999999;

    p {
      font-family: "Roboto";
      font-size: 1.5rem;
      font-weight: 500;
      color: #000;
      text-align: center;
      padding: 0 6rem;
    }
  }

  .passwordModal {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(#000, 0.9);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;

    .fa {
      font-size: 100px;
      position: absolute;
      top: 100px;
      right: 100px;
      color: red;
    }

    .numpad {
      width: auto;
      height: auto;
      display: flex;
      align-items: center;
      flex-direction: column;
      position: absolute;

      input {
        width: 250px;
        height: 50px;
        display: inline-block;
        margin-bottom: 20px;
        outline: none;
        padding: 3px 8px;
        font-family: "Roboto";
        font-size: 30px;
      }

      .number {
        width: 240px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        // display: grid;
        // grid-template-columns: repeat(3, 1fr);
        // grid-gap: 10px;
        // grid-auto-rows: auto;
        background-color: #333;
        border: 1px solid #c5c5c5;
        border-radius: 4px;
        padding: 8px;

        &__item {
          width: 56px;
          height: 56px;
          font-family: "Roboto";
          font-size: 2em;
          text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
          color: #fff;
          background: #484747;
          border: 1px solid #bbb;
          border-radius: 4px;
          margin: 8px;
          transition: 0.2s all ease-in-out;
          outline: none;

          &:hover {
            border-color: rgb(126, 126, 126);
          }
        }
      }
    }

    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 250px;
      height: 70px;
      background: #28a745;
      font-family: "Roboto";
      font-size: 2rem;
      font-weight: 400;
      color: #fff;
      margin-top: 3rem;
    }
  }

  // p {
  //   word-break: break-all;
  // }
}
</style>
