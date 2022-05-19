import React, { ReactNode, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StyledButton from '../StyledButton';
import ActionModal from '../ActionModal';
import { fontStyles } from '../../../styles/common';
import { mockTheme, useAppThemeFromContext } from '../../../util/theme';

interface ISettingsButtonSectionProps {
  sectionTitle: string;
  sectionButtonText: string;
  modalTitleText: string;
  modalDescriptionText: string;
  modalConfirmButtonText: string;
  modalCancelButtonText: string;
  modalOnConfirm: () => null;
  descriptionText: ReactNode;
}

const createStyles = (colors: any) =>
  StyleSheet.create({
    setting: {
      marginTop: 50,
    },
    title: {
      ...fontStyles.normal,
      color: colors.text.default,
      fontSize: 20,
      lineHeight: 20,
      paddingTop: 4,
      marginTop: -4,
    },
    desc: {
      ...fontStyles.normal,
      color: colors.text.alternative,
      fontSize: 14,
      lineHeight: 20,
      marginTop: 12,
    },
    confirmButton: {
      marginTop: 18,
    },
    modalView: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 20,
    },
    modalTitle: {
      ...fontStyles.bold,
      fontSize: 22,
      textAlign: 'center',
      marginBottom: 20,
      color: colors.text.default,
    },
    modalText: {
      ...fontStyles.normal,
      fontSize: 18,
      textAlign: 'center',
      color: colors.text.default,
    },
  });

const SettingsButtonSection = ({
  sectionTitle,
  sectionButtonText,
  modalTitleText,
  modalDescriptionText,
  modalConfirmButtonText,
  modalCancelButtonText,
  modalOnConfirm,
  descriptionText,
}: ISettingsButtonSectionProps) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const { colors } = useAppThemeFromContext() || mockTheme;
  const styles = createStyles(colors);

  const updateShowModalState = () => setModalVisible(!modalVisible);

  return (
    <>
      <View style={styles.setting}>
        <Text style={styles.title}>{sectionTitle}</Text>
        <Text style={styles.desc}>{descriptionText}</Text>
        <StyledButton
          type="normal"
          onPress={updateShowModalState}
          containerStyle={styles.confirmButton}
        >
          {sectionButtonText}
        </StyledButton>
      </View>
      <ActionModal
        modalVisible={modalVisible}
        confirmText={modalConfirmButtonText}
        cancelText={modalCancelButtonText}
        onCancelPress={updateShowModalState}
        onRequestClose={updateShowModalState}
        onConfirmPress={modalOnConfirm}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>{modalTitleText}</Text>
          <Text style={styles.modalText}>{modalDescriptionText}</Text>
        </View>
      </ActionModal>
    </>
  );
};

export default SettingsButtonSection;
