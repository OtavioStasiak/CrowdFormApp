import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {CheckSquare, Square, X} from 'phosphor-react-native';
import {theme} from '../../theme/theme';
import {ModalView} from '../ModalView';
import {termOfServiceText} from '../../data/termsOfService';
import {privacyPolicy} from '../../data/privacyPolicy';

type Props = {
  checked?: boolean;
  onCheckPress: () => void;
};
export function TermsOfServiceCheckbox({checked = false, onCheckPress}: Props) {
  const [termsOfServiceModal, setTermsOfServiceModal] = useState(false);
  const [privacyPolicyModal, setPrivacyPolicyModal] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={onCheckPress}>
        {checked ? (
          <CheckSquare color={theme.colors.gray_200} />
        ) : (
          <Square color={theme.colors.gray_200} />
        )}
      </TouchableOpacity>
      <Text style={styles.text_gray}>
        I am over 18 years of age and I have read and agree {'\n'}to the{' '}
        <Text
          style={styles.text_button}
          onPress={() => setTermsOfServiceModal(true)}>
          Terms of Service{' '}
        </Text>
        and
        <Text
          onPress={() => setPrivacyPolicyModal(true)}
          style={styles.text_button}>
          {' '}
          Privacy policy
        </Text>
        .
      </Text>

      <ModalView animationType="fade" visible={termsOfServiceModal}>
        <View style={styles.modal}>
          <TouchableOpacity
            onPress={() => setTermsOfServiceModal(false)}
            style={styles.close}>
            <X />
          </TouchableOpacity>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.text_button}>{termOfServiceText}</Text>
          </ScrollView>
        </View>
      </ModalView>

      <ModalView animationType="fade" visible={privacyPolicyModal}>
        <View style={styles.modal}>
          <TouchableOpacity
            onPress={() => setPrivacyPolicyModal(false)}
            style={styles.close}>
            <X />
          </TouchableOpacity>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.text_button}>{privacyPolicy}</Text>
          </ScrollView>
        </View>
      </ModalView>
    </View>
  );
}
