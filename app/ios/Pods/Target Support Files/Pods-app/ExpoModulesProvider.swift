/**
 * Automatically generated by expo-modules-autolinking.
 *
 * This autogenerated class provides a list of classes of native Expo modules,
 * but only these that are written in Swift and use the new API for creating Expo modules.
 */

import ExpoModulesCore
import ExpoAdapterGoogleSignIn
import ExpoAsset
import EXConstants
import ExpoFileSystem
import ExpoFont
import ExpoKeepAwake
import ExpoHead
import ExpoSystemUI
import ExpoWebBrowser

@objc(ExpoModulesProvider)
public class ExpoModulesProvider: ModulesProvider {
  public override func getModuleClasses() -> [AnyModule.Type] {
    return [
      AssetModule.self,
      ConstantsModule.self,
      FileSystemModule.self,
      FontLoaderModule.self,
      KeepAwakeModule.self,
      ExpoHeadModule.self,
      ExpoSystemUIModule.self,
      WebBrowserModule.self
    ]
  }

  public override func getAppDelegateSubscribers() -> [ExpoAppDelegateSubscriber.Type] {
    return [
      GoogleSignInAppDelegate.self,
      FileSystemBackgroundSessionHandler.self,
      ExpoHeadAppDelegateSubscriber.self
    ]
  }

  public override func getReactDelegateHandlers() -> [ExpoReactDelegateHandlerTupleType] {
    return [
    ]
  }
}
